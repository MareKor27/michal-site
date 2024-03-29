import { Helmet } from "react-helmet-async";
import { OwnButton } from "~/components/button/OwnButton";
import { InfoBox } from "~/components/infoBox/InfoBox";
import { MainPageBox } from "~/components/mainPageBox/MainPageBox";
import { Parallax } from "~/components/parallax/Parallax";
import { Slider } from "~/components/slider/Slider";

export function Home() {
  return (
    <>
      <Helmet>
        <title>FigowSki - Strona Główna</title>
        <meta name="description" content="Strona o narciarstwie opis" />
      </Helmet>
      <Slider className={"body-arranged-md"} />
      <MainPageBox
        className={"body-arranged-md"}
        image={"images/content/mainbox-content.webp"}
        alt={"Grupa na stocku"}
      >
        <h1>Szkoła narciarstwa i snowboardu FigowSki</h1>
        <p>
          Nauczymy Cię jeździć na nartach - wystarczą tylko chęci, skupienie
          uwagi podczas zajęć prowadzonych przez sprawdzonych i
          wykwalifikowanych instruktorów Polskiego Związku Narciarskiego, a
          uśmiech na twarzy pojawi się sam.
        </p>
        <p>
          <b>Szkoła Narciarska FigowSki</b> powstała z inicjatywy instruktora
          narciarskiego, na codzien nauczyciela wychowania fizycznego i trenera,
          jak również prywatnie ojca dwójki małych smoków narciarskich. Z pasji
          do sportów zimowych w tym narciarstwa zjazdowego wieloletnie
          doświadczenie w organizacji procesu szkolenia dzieci, młodzieży, jak
          również osób dorosłych zostało wykorzystane do zwiększenia przestrzeni
          w dalszym zarażaniu <b>narciarstwem</b>. Prowadzimy szkolenie w formie
          lekcji indywidualnych i grupowych, ze szczególnym uwzględnieniem tego
          co najważniejsze: bezpieczeństwo na stoku, profesjonalizm w
          metodycznym nauczaniu, nienaganny kontakt z kursantami, dbałość o
          wyniki i postęp oraz satysfakcje klienta
        </p>
      </MainPageBox>

      <MainPageBox
        className={"body-stretched"}
        image={"images/content/newbox1.webp"}
        alt={"Michał Jaśkiewicz na stocku narciarskim"}
      >
        <h2>o mnie</h2>
        <p>
          Nazywam się Michał Jaśkiewicz, należę do Stowarzyszenia Trenerów i
          Instruktorów Narciarstwa Polskiego Związku Narciarskiego, nieustannie
          podążam za nowymi innowacjami w szkoleniu dzieci i młodzieży
          jednocześnie doskonaląc osobiście swój warsztat pracy. Narty maja nas
          cieszyć, rozwijać, pomagać w przełamywaniu często ograniczajacych nas
          barier, integrowac dzieci, ale również nas dorosłych i uczyc
          bezpieczeństwa (nie tylko na stoku), zdrowej, przyjaznej rywalizacji
          oraz kibicowania. <br />
          Dlatego uczymy jezdzic na nartach w sposob uwielbiany przez dzieci -
          <b> „Od zabawy do sportu”.</b>
        </p>
        <p></p>
        <OwnButton to="/o-nas" text={"Czytaj więcej"} />
      </MainPageBox>

      {/* <NewInfoBox
        className={"body-stretched"}
        image={"images/content/newbox1.webp"}
        height={"400"}
        type={2}
      >
        <h2>o mnie</h2>
        <p>
          Nazywam się Michał Jaśkiewicz, należę do Stowarzyszenia Trenerów i
          Instruktorów Narciarstwa Polskiego Związku Narciarskiego, nieustannie
          podążam za nowymi innowacjami w szkoleniu dzieci i młodzieży
          jednocześnie doskonaląc osobiście swój warsztat pracy. Narty maja nas
          cieszyć, rozwijać, pomagać w przełamywaniu często ograniczajacych nas
          barier, integrowac dzieci, ale również nas dorosłych i uczyc
          bezpieczeństwa (nie tylko na stoku), zdrowej, przyjaznej rywalizacji
          oraz kibicowania. <br />
          Dlatego uczymy jezdzic na nartach w sposob uwielbiany przez dzieci -
          <b> „Od zabawy do sportu”.</b>
        </p>
        <p></p>
        <OwnButton link={"o-nas"} text={"Czytaj więcej"} />
      </NewInfoBox> */}
      <InfoBox
        height={"400"}
        type={2}
        image={"images/slider/slider-n-3.webp"}
        classname="body-arranged-md"
      >
        <h2>Oferta</h2>

        <ul>
          <li>szkolenie indyw. cennik</li>
          <li>szkolenie grupowe cennik</li>
          <li>wyjazdynarciarskie</li>
          <li>wyjazdy rodzinne</li>
          <li>
            pomoc w samorozwoju kursantów – od demonstratora do instruktora
          </li>
        </ul>

        <OwnButton to="/cennik" text={"Sprawdz naszą ofertę"} />
      </InfoBox>

      <InfoBox
        height={"400"}
        type={1}
        image={"images/slider/slider-n-6.webp"}
        classname="body-arranged-md"
      >
        <h2>Galeria</h2>
        <p>Zapraszamy do galerii</p>
        <OwnButton to="/galeria" text={"Zobacz więcej"} />
      </InfoBox>
      {/* <Section size="arranged-md" type="">
        <h4>section</h4>
      </Section> */}
      <InfoBox
        height={"400"}
        type={3}
        image={"images/slider/slider-n-4.webp"}
        classname="body-arranged-md"
      >
        <h2>Kontakt</h2>
        <p>Zapraszamy do kontaktu</p>
        <OwnButton to="/kontakt" text={"Kontakt"} />
      </InfoBox>

      {/* <Parallax image={"images/skiing-parallax.webp"} /> */}
      <Parallax
        image={"images/content/paralaks-1.webp"}
        alt={"Grupa dzieci na nartach"}
      />
    </>
  );
}
