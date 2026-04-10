function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function App() {
  const juegos = [
    {
      title: 'Ruta del sentido',
      type: 'Presencial',
      text:
        'Organicen estaciones con preguntas profundas como “¿Qué le da sentido a tu vida?” o “¿Qué valor nunca negociarías?”. Cada grupo rota, conversa y deja una conclusión.',
    },
    {
      title: 'Dilemas de la vida real',
      type: 'Presencial o en línea',
      text:
        'Presenten situaciones que obliguen a decidir entre valores, metas y propósito. El público elige una postura y la defiende.',
    },
    {
      title: 'Caja de las grandes preguntas',
      type: 'Presencial',
      text:
        'Cada participante escribe una pregunta existencial anónima. Luego ustedes las sacan al azar y guían una conversación dinámica.',
    },
    {
      title: 'Muro del propósito',
      type: 'Presencial o en línea',
      text:
        'Usen notas adhesivas o un formulario digital para completar la frase “Mi vida tiene sentido cuando…”. Después analicen las respuestas con el grupo.',
    },
    {
      title: 'Kahoot o Quizizz reflexivo',
      type: 'En línea',
      text:
        'Creen preguntas con dilemas, prioridades y valores, no solo de memoria. Después de cada respuesta, abran un mini debate.',
    },
    {
      title: 'Historia con final abierto',
      type: 'Presencial o en línea',
      text:
        'Narran una historia sobre alguien que busca propósito. El público propone finales y justifica cuál tiene más sentido.',
    },
    {
      title: 'Semáforo existencial',
      type: 'Presencial',
      text:
        'Lancen frases polémicas como “El éxito da sentido a la vida”. El público responde con verde, amarillo o rojo y explica por qué.',
    },
    {
      title: 'Debate express',
      type: 'Presencial',
      text:
        'Armen dos equipos con preguntas como “¿Se encuentra o se construye el sentido de la vida?”. Cada grupo argumenta en pocos minutos.',
    },
  ]

  const caracteristicas = [
    'Escucha activa',
    'Empatía',
    'Servicio a los demás',
    'Trabajo en equipo',
    'Ejemplo ético',
    'Búsqueda del bien común',
  ]

  const dramatizacion = [
    'El policía saluda con respeto y genera confianza.',
    'Escucha primero antes de juzgar o sancionar.',
    'Busca entender la raíz del conflicto.',
    'Invita a las partes a dialogar.',
    'Propone acuerdos para el bienestar común.',
    'Demuestra que liderar también es servir y cuidar a la comunidad.',
  ]

  return (
    <div className="app">
      <header className="hero">
        <div className="container">
          <p className="eyebrow">Proyecto educativo</p>
          <h1>Inteligencia Existencial y Liderazgo Servicial</h1>
          <p className="hero-text">
            Una página web para explicar ambos temas de forma clara, didáctica y
            participativa.
          </p>
        </div>
      </header>

      <main className="container main-content">
        <section className="grid two-columns">
          <Card title="Inteligencia Existencial">
            <p>
              Es la capacidad de reflexionar sobre preguntas profundas de la vida:
              el propósito, el sentido de la existencia, la identidad, la libertad
              y la relación del ser humano con el mundo.
            </p>
            <p>
              Esta inteligencia impulsa a pensar más allá de lo inmediato, a
              cuestionar con profundidad y a buscar significado en lo que hacemos.
            </p>
          </Card>

          <Card title="Ideas de juegos participativos">
            <p>
              Para este tema conviene hacer actividades donde el público piense,
              opine, se mueva y construya sus propias respuestas.
            </p>

            <div className="games">
              {juegos.map((juego) => (
                <div className="game-item" key={juego.title}>
                  <h4>{juego.title}</h4>
                  <span>{juego.type}</span>
                  <p>{juego.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid two-columns">
          <Card title="Liderazgo Servicial">
            <p>
              Es un modelo de liderazgo centrado en servir. El líder no busca solo
              mandar, sino escuchar, apoyar, orientar y ayudar al crecimiento de
              los demás.
            </p>
            <BulletList items={caracteristicas} />
          </Card>

          <Card title="Dramatización en la policía">
            <p>
              Escena propuesta: en un barrio hay un conflicto entre vecinos por
              discusiones y problemas de convivencia. El policía llega al lugar y,
              en vez de imponer su autoridad de forma agresiva, actúa como líder
              servicial.
            </p>
            <BulletList items={dramatizacion} />
          </Card>
        </section>

        <section className="grid two-columns">
          <div className="highlight highlight-blue">
            <h3>Consejo para la exposición</h3>
            <p>
              Empiecen con una pregunta poderosa al público, luego hagan el juego y
              después expliquen el tema apoyándose en lo que las personas
              respondieron.
            </p>
          </div>

          <div className="highlight highlight-green">
            <h3>Mensaje final</h3>
            <p>
              La inteligencia existencial nos lleva a preguntarnos por el sentido
              de la vida, y el liderazgo servicial nos enseña que ese sentido
              también se expresa en cómo ayudamos a los demás.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
