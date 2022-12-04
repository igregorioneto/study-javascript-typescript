class List {
  all() {
    return []
  }
}

class Contact {
  name = "José";
}

function showType(arg: List | Contact) {
  if (arg instanceof List) {
    console.log(arg.all());
    return arg.all();
  }
  throw new Error("O tipo não é suportado");
}

showType(new List());
showType(new Contact());



