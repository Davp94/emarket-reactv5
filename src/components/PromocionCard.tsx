interface PromocionCardProps {
  titleProp: string;
  descripcionProp: string;
  imageUrl: string;
}
export function PromocionCard({
  titleProp,
  descripcionProp,
  imageUrl,
}: PromocionCardProps) {
  //business logic
  // const title = 'PROMOCION CARD'
  // const descripcion = 'dasdsadsadsadsadsadd'
  let price: number = 100;
  const isActive: boolean = true;

  //view
  return (
    <div>
      <img src={imageUrl} />
      <label>{titleProp}</label>
      <p>{descripcionProp}</p>
      <button>Ver Detalle</button>
    </div>
  );
}
