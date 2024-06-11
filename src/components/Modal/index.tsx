import { IModal } from "./type";
import * as Styles from "./styles";

export const Modal = ({ setModal, title, children }: IModal) => (
  <Styles.Background
    id="background"
    onMouseDown={(evt: any) => {
      if (evt.target.id === "background") setModal(false);
    }}
  >
    <Styles.Body>
      <Styles.Header>
        <h2>{title}</h2>
        <Styles.Icon onClick={() => setModal(false)}>X</Styles.Icon>
      </Styles.Header>
      {children}
    </Styles.Body>
  </Styles.Background>
);
