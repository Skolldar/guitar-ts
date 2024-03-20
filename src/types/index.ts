export type Guitar = { //este ej se ppuede poner type o interface, seria lo mismo
    id: number
    name: string
    image: string
    description: string
    price: number
}



//Heredar y extender en type:
export type CartItem = Guitar & {
    quantity: number
}



//////////////////////////////////////////////////////////////////////////////////////
//UTILITY TYPES: solo funciona con los types.

//Look up: solo toma un tipo de dato:
//export type GuitarID = Guitar['id']

//***********************************************************************************/
//Pick: palabra reservada de typescripts, es muy util para seleccionar atributos espeficicos al heredar un type, el "|" se usa como una ","
//export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' > { 
// quantity: number //agregar un atributo nuevo que no tenga el type anterior
// }

//***********************************************************************************/
//Omit: palabra reservada de typescripts, es muy util para OMITIR atributos espeficicos al heredar un type, el "|" se usa como una ","
//export type CartItem = Omit<Guitar, 'id' | 'name' | 'price' > { 
// quantity: number //agregar un atributo nuevo que no tenga el type anterior
// }

//**********************************************************************************/
// HEREDAR EN INTERFACE:
//Heredar y extender en INTERFACE:
//export interface CartItem extends Guitar & {
//     quantity: number
// }
/////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////
//NO es recomendable agregar los types en el archivo types.d.ts

//Se importa aca los types que se vayan a usar en varios componentes  y si es solo un prop que se usa en un solo archivo, entonces se deja en su archivo 
/////////////////////////////////////////////////////////////////////////////////////