import style from "~/components/infoBox/NewInfoBox.module.scss";
import { Contener } from "../contener/Contener";
import { ReactNode } from "react";
import useStyles from "~/hooks/useStyle";

type InfoBoxType = {
  children: ReactNode;
  type: number;
  image: string;
  height: string;
  className: string;
  alt: string;
};

export function NewInfoBox({ children, image, className, alt }: InfoBoxType) {
  const s = useStyles(style);
  return (
    <div className={s(`infobox type1`)}>
      <div className={s("infobox-overlay")}>
        <Contener className={className}>
          <div className={s("mainInfoBox-content")}>
            <img className={s("infobox-photo")} src={image} alt={alt} />
            <div className={s("infobox-text")}>{children}</div>
          </div>
        </Contener>
      </div>
    </div>
  );
}
