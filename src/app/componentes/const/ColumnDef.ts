export const getValueField = (element:any, field: string ) => `${element[field]}`;
export const getListField = (element:any, field: string ) => {
  return Array(element[field]).toString();
}

export const getArrayStringField = (element:any, field: string ) => {
  return element[field].split(',')
}
export const getBoolField = (element:any, field: string ) => {
  return element[field] ==true ? "Si" : "No";
};
export const getBoolFieldActivo = (element:any, field: string ) => {
  return element[field] ==true ? "Activo" : "Inactivo";
};

//Devuelve una lista de solo los meses que tiene true
export const getArrField = (element:any, field: string ) => {
  let res:string[] = [];
  element[field].map((x:any)=>{
    if (x.value){
      res.push(x.nombre);
  }
  });
  return res.toString();
}