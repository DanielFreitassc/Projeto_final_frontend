import { z } from "zod"
import { Modal } from "../../../../../components/Modal"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { InputForm } from "../../../../../components/Form/Input"
import { Button } from "../../styles"
import { ButtonContainer } from "./styles"
import { privateAPi } from "../../../../../services/privateApi"

interface IModalProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    onSave: () => void
}

export const ModalCreateProduct = ({onSave,setModal }: IModalProps) => {

    const schema = z.object({
        barcode: z.string().min(1, "Campo obrigatório"),
        name: z.string().min(1, "Campo obrigatório"),
        amount: z.string().min(1, "Campo obrigatório"),
        price: z.string().min(1, "Campo obrigatório"),
        description: z.string().min(1, "Campo obrigatório"),
        category: z.string().min(1, "Campo obrigatório"),
    })

    type TFormData = z.infer<typeof schema>

    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<TFormData>({
        resolver: zodResolver(schema),
        defaultValues:{
            barcode: '',
            category: '',
            description: '',
            name: '',
            price: '',
            amount: '',
        }
    })

    const reqCreateProduct = async(data: TFormData) => {
        await privateAPi.post('/products',{
            ...data,
            unitaryValue: Number(data.price),
            amount: Number(data.amount),
            barcode: Number(data.barcode),
            image: '',
            sector: '',
            weight: null
        }).then(() => {
            onSave()
            setModal(false)
        }).catch(() => alert("Erro"))
    }

  return (
    <Modal title="Cadastrar produto" setModal={setModal}>
        <form onSubmit={handleSubmit(reqCreateProduct)}>
            <InputForm 
                label="Codigo"
                placeholder="Ex: 010101"
                helperText={errors.barcode?.message}
                {...register('barcode')}
                type="number"
            />

            <InputForm 
                label="Nome"
                placeholder="Ex: Sabão"
                helperText={errors.name?.message}
                {...register('name')}
            />

            <InputForm 
                label="Descrição"
                placeholder="Ex: Serve para limpar"
                helperText={errors.description?.message}
                {...register('description')}
            />

            <InputForm 
                label="Preço"
                placeholder="Ex: R$10,00"
                helperText={errors.price?.message}
                {...register('price')}
                type="number"
            />

            <InputForm 
                label="Quantidade"
                placeholder="Ex: 40"
                helperText={errors.amount?.message}
                {...register('amount')}
                type="number"
            />

            <InputForm 
                label="Categoria"
                placeholder="Ex: Limpeza"
                helperText={errors.category?.message}
                {...register('category')}
            />
            <ButtonContainer>
                <Button type="submit">Cadastrar</Button>
            </ButtonContainer>
        </form>
    </Modal>
  )
}
