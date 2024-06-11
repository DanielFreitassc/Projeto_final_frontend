export interface IModal {
    title: string;
    children: React.ReactNode;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}