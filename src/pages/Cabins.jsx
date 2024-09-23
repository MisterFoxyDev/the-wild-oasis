import { useState } from "react";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";


function Cabins() {
const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row>
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row type="vertical"><CabinTable />
      <Button onClick={()=>setShowForm(show=>!show)}>{!showForm ? "Add new cabin" : "Close panel"}</Button>
      {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
