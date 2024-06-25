import { useState } from "react";
import { TableContent, TableList } from "../../../components/Table";
import { useFetch } from "../../../hook/useFetch";
import * as Styles from "./styles";
import { IProduct } from "./types";
import { ModalCreateProduct } from "./utils/ModalCreateProduct";
import { ModalEditProduct } from "./utils/ModalEditProduct";
import { privateAPi } from "../../../services/privateApi";
import { catchHandler } from "../../../utils/functions";
import { toast } from "react-toastify";

export const ProductsList = () => {
  //Modals
  const [modalCreateProduct, setModalCreateProduct] = useState(false);
  const [modalEditProduct, setModalEditProduct] = useState(false);
  const { data, loading, refetch } = useFetch<IProduct[]>({
    api: "/products",
  });

  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const handleDeleteProduct = async (id: number) => {
    await privateAPi
      .delete(`/products/${id}`)
      .then(() => {
        toast.success("Apagado com sucesso");
        refetch();
      })
      .catch((err: any) => catchHandler(err));
  };

  return (
    <Styles.Container>
      {modalCreateProduct && (
        <ModalCreateProduct
          onSave={() => refetch()}
          setModal={setModalCreateProduct}
        />
      )}
      {modalEditProduct && selectedProduct && (
        <ModalEditProduct
          onSave={() => refetch()}
          setModal={setModalEditProduct}
          product={selectedProduct}
        />
      )}
      <Styles.Header>
        <h2>Produtos</h2>
        <Styles.Button onClick={() => setModalCreateProduct(true)}>
          Cadastrar
        </Styles.Button>
      </Styles.Header>
      {loading && <p>Carregando...</p>}
      {!loading && !!data.length && (
        <Styles.TableContainer>
          <TableList
            colsHeader={[
              { label: "Codigo" },
              { label: "Nome" },
              { label: "description" },
              { label: "Valor" },
              { label: "Quantidade" },
              { label: "Categoria" },
              { label: "Ações" },
            ]}
          >
            {data.map((product) => (
              <TableContent
                key={product.id}
                colsBody={[
                  { cell: product.barcode },
                  { cell: product.name },
                  { cell: product.description },
                  { cell: product.unitaryValue },
                  { cell: product.amount },
                  { cell: product.category },
                  {
                    cell: (
                      <Styles.ActionContainer>
                        <Styles.Button
                          $width="100px"
                          onClick={() => {
                            setSelectedProduct(product);
                            setModalEditProduct(true);
                          }}
                        >
                          Editar
                        </Styles.Button>
                        <Styles.Button
                          $bgColor="red"
                          $width="100px"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Apagar
                        </Styles.Button>
                      </Styles.ActionContainer>
                    ),
                  },
                ]}
              />
            ))}
          </TableList>
        </Styles.TableContainer>
      )}
      {!loading && !data.length && <p>Sem itens cadastrados</p>}
    </Styles.Container>
  );
};
