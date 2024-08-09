import { useEffect, useState } from "react";
import { faker, fakerKA_GE } from "@faker-js/faker";
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
        jobArea: faker.person.jobArea(),
        prefix: faker.person.prefix(),
        jobTitle: faker.person.jobTitle(),
        jobType: faker.person.jobType(),
      });
    }
    setInitData(valuesData);
  }, []);

  return (
    <DataTable
      value={initData}
      scrollable
      scrollHeight="400px"
      tableStyle={{ minWidth: "10rem" }}
      selectionMode="single"
      name="table"
      id="table"
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10]}
    >
      <Column field="firstName" header="Nombre" sortable></Column>
      <Column field="lastName" header="Apellido" sortable></Column>
      <Column field="fullName" header="Todo el nombre"></Column>
      <Column field="sex" header="Genero"></Column>
      <Column field="id" header="Actividades"></Column>
      <Column field="jobArea" header="Area laboral"></Column>
      <Column field="prefix" header="Prefijo"></Column>
      <Column field="jobTitle" header="Titulo"></Column>
      <Column field="jobType" header="Tipo laboral"></Column>
      <Column field="jobType" header="Tipo laboral"></Column>
    </DataTable>
  );
}
export { Datos };
