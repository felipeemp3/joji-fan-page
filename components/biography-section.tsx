import { Card } from "@/components/ui/card";

export function BiographySection() {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold tracking-tight">Biografia</h2>

      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            George Kusunoki Miller nació el 16 de septiembre de 1993 en Osaka,
            Japón. Asistió a una escuela internacional, la Academia Canadiense,
            en Kobe, Japón, donde se graduó en 2012. De clase alta, a los 18
            años, dejó Japón y viajó a los Estados Unidos. Es de ascendencia
            japonesa por parte de su madre y australiana por parte de su padre.
          </p>

          <p>
            Su álbum de estudio debut,{" "}
            <span className="text-primary font-semibold">BALLADS 1</span>{" "}
            (2018), alcanzó el número uno en la lista de R&B y hip-hop de
            Billboard. El álbum incluía éxitos como "SLOW DANCING IN THE DARK" y
            "YEAH RIGHT", consolidando su sonido melancólico y lo-fi.
          </p>

          <p>
            En 2020, Joji lanzó su segundo álbum de estudio,{" "}
            <span className="text-primary font-semibold">Nectar</span>, que
            debutó en el número tres del Billboard 200 de Estados Unidos. El
            álbum mostró su evolución como artista, mezclando elementos de R&B,
            trip-hop e indie pop.
          </p>

          <p>
            Su tercer álbum de estudio,{" "}
            <span className="text-primary font-semibold">Smithereens</span>{" "}
            (2022), continuó rompiendo barreras con sus letras introspectivas y
            su producción atmosférica. La música de Joji se caracteriza por su
            profundidad emocional, producción minimalista y su distintivo estilo
            vocal, que resuena con millones de fans en todo el mundo.
          </p>
        </div>
      </Card>
    </section>
  );
}
