import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
function Datos() {
  const [initData, setInitData] = useState([]);
  useEffect(() => {
    let valuesData = [];
    for (let i = 0; i < 50; i++) {
      valuesData.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        fullName: faker.person.fullName(),
        sex: faker.person.sex(),
        id: faker.person.bio(),
      });
    }
    setInitData(valuesData);
  }, []);

  return (
    <DataTable
      value={initData}
      tableStyle={{ minWidth: "10rem" }}
      name="table"
      id="table"
      stripedRows
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
    >
      <Column field="firstName" header="Nombre"></Column>
      <Column field="lastName" header="Apellido"></Column>
      <Column field="fullName" header="Todo el nombre"></Column>
      <Column field="sex" header="Genero"></Column>
      <Column field="id" header="Actividades"></Column>
    </DataTable>
  );
}
export { Datos };
