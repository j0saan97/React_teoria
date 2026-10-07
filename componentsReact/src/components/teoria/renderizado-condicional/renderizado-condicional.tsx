import type { CSSProperties, JSX } from "react";

export type Estado = "cargando" | "error" | "ok";

export type PanelProps = {
  isLoggedIn: boolean;
  notificaciones: number;
  estado: Estado;
  nombre?: string;
};

export function Panel({
  isLoggedIn,
  notificaciones,
  estado,
  nombre = "Josan",
}: PanelProps) {
  // 1. Early return
  if (!isLoggedIn) {
    return (
      <div style={styles.card}>
        <p>🔒 Inicia sesión para ver el panel</p>
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <h2 style={{ margin: 0 }}>Hola, {nombre}</h2>

      {/* 2. Ternario */}
      <p>{notificaciones > 0 ? "📬 Tienes avisos" : "✅ Todo al día"}</p>

      {/* 3. && */}
      {notificaciones > 0 && (
        <span style={styles.badge}>{notificaciones} nuevas</span>
      )}

      {/* 4. Mapa de estados */}
      <div style={{ marginTop: 12 }}>{vistasPorEstado[estado]}</div>
    </div>
  );
}

const vistasPorEstado: Record<Estado, JSX.Element> = {
  cargando: <p>⏳ Cargando datos...</p>,
  error: <p style={{ color: "crimson" }}>❌ Algo falló</p>,
  ok: <p style={{ color: "seagreen" }}>✔️ Datos listos</p>,
};

const styles = {
  card: {
    fontFamily: "system-ui, sans-serif",
    border: "1px solid #ddd",
    borderRadius: 8,
    padding: 16,
    maxWidth: 320,
  },
  badge: {
    background: "crimson",
    color: "white",
    borderRadius: 999,
    padding: "2px 10px",
    fontSize: 12,
  },
} satisfies Record<string, CSSProperties>;
export default Panel;
