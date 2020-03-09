To reproduce the erorr, run below query 

query {
  person(id: "12345"){
   Id,
    PersonHierarchies {
      Id
    }
  }
}

