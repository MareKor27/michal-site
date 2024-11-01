import { Gallery } from "~/components/gallery/Gallery";
import { Contener } from "~/components/contener/Contener";
import { Content } from "~/components/content/Content";
// import style from "~/components/content/Content.module.css";
// import style2 from "~/Global.module.css";
// import useStyles from "~/hooks/useStyle";
import { TextBox } from "~/components/textbox/TextBox";
import { Helmet } from "react-helmet-async";
import gallery from "~/data/gallery.json";
import { Breadcrums } from "~/components/breadcrumbs/Breadcrumbs";

export function Photos() {
  // const s = useStyles(style);
  // const s2 = useStyles(style2);

  return (
    <Contener className="body-arranged-md">
      <Helmet>
        <title>
          Galeria | Nasze zdjęcia z zajęć narciarskich i snowboardowych -
          FigowSki
        </title>
        <meta
          name="description"
          content="Odwiedź naszą galerię, aby zobaczyć zdjęcia z naszych zajęć nauki jazdy na nartach i snowboardzie. Przekonaj się, dlaczego warto dołączyć do naszej szkoły narciarskiej!"
        />
      </Helmet>
      <Content className={"content"}>
        <Breadcrums namePage={"Galeria"} />
        <TextBox>
          <h1>Galeria - FigowSki na Górce Szczęśliwickiej</h1>
          <p>
            Zapraszamy do obejrzenia zdjęć zrobionych w różnych miejscach i
            momentach naszych narciarskich aktywności i pamiętajcie, że cały
            czas się rozkręcamy.
          </p>
        </TextBox>
        <TextBox className={"text-center"}>
          <Gallery
            photos={gallery.filter((img) => img.gallery === "galleryOne")}
          />
        </TextBox>
      </Content>
    </Contener>
  );
}
