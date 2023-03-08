import { createColumnHelper, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { Button, Container, Pagination, Table } from 'react-bootstrap';
import './App.css';

interface Parametro {
  id: number;
  nome: string;
}

const fakeData: Parametro[] = [
  { id: 1, nome: 'Parametro 01' },
  { id: 2, nome: 'Parametro 02' },
  { id: 3, nome: 'Parametro 03' },
  { id: 4, nome: 'Parametro 04' },
  { id: 5, nome: 'Parametro 05' },
  { id: 6, nome: 'Parametro 06' },
  { id: 7, nome: 'Parametro 07' },
  { id: 8, nome: 'Parametro 08' },
  { id: 9, nome: 'Parametro 09' },
  { id: 10, nome: 'Parametro 10' },
  { id: 11, nome: 'Parametro 11' },
  { id: 12, nome: 'Parametro 12' },
  { id: 13, nome: 'Parametro 13' },
  { id: 14, nome: 'Parametro 14' },
  { id: 15, nome: 'Parametro 15' },
  { id: 16, nome: 'Parametro 16' },
  { id: 17, nome: 'Parametro 17' },
  { id: 18, nome: 'Parametro 18' },
  { id: 19, nome: 'Parametro 19' },
  { id: 20, nome: 'Parametro 20' },
];

const columnHelper = createColumnHelper<Parametro>();
const defaultColumns = [
  // Display Column
  columnHelper.display({
    id: 'actions',
    cell: ({ row }) => <div>{row.depth}</div>,
  }),
  // Grouping Column
  columnHelper.group({
    header: 'Name',
    footer: props => props.column.id,
    columns: [
      // Accessor Column
      columnHelper.accessor('id', {
        cell: info => info.getValue(),
        footer: props => props.column.id,
      }),
      // Accessor Column
      columnHelper.accessor(row => row.nome, {
        id: 'nome',
        cell: info => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: props => props.column.id,
      }),
    ],
  }),
  // Grouping Column
  columnHelper.group({
    header: 'Info',
    footer: props => props.column.id,
    columns: [
      // Accessor Column
      columnHelper.accessor('age', {
        header: () => 'Age',
        footer: props => props.column.id,
      }),
      // Grouping Column
      columnHelper.group({
        header: 'More Info',
        columns: [
          // Accessor Column
          columnHelper.accessor('visits', {
            header: () => <span>Visits</span>,
            footer: props => props.column.id,
          }),
          // Accessor Column
          columnHelper.accessor('status', {
            header: 'Status',
            footer: props => props.column.id,
          }),
          // Accessor Column
          columnHelper.accessor('progress', {
            header: 'Profile Progress',
            footer: props => props.column.id,
          }),
        ],
      }),
    ],
  }),
];

export default function App() {
  const [parametros, setParametros] = useState<Parametro[]>(fakeData);

  const table = useReactTable(options);

  return (
    <Container>
      <h1>Parâmetros</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {parametros.map((p) =>
            <tr key={p.nome}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>
                <Button size='sm' color='danger'>Excluir</Button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Item>1</Pagination.Item>
      </Pagination>
    </Container>
  );
}


