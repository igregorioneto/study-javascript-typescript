interface Contact {
  phone: number
}

interface Address {
  city: string
}

function showType(arg: Contact | Address) {
  if ("phone" in arg) {
    console.log(`A propriedade ${arg.phone} existe`)
    return `A propriedade ${arg.phone} existe`
  }
  throw new Error("Este tipo não é suportado")
}

showType({ phone: 51900000000 });

showType({ city: "Gothan City" });