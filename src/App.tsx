import { useEffect, useState } from "react";
import { PromocionCard } from "./components/PromocionCard";

interface Promocion {
  id: number;
  title: string;
  descripcion: string;
  imageUrl: string;
}
function App() {
  const [count, setCount] = useState(0);
  const promotions: Promocion[] = [
    {
      id: 1,
      title: "Audio Premium Pro",
      descripcion:
        "Sumergete en la mejor calidad de sonido con cancelación activa de ruido y 40 horas de batería.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuByFQzmfMNhXPo7ZQKgBt45RFBbLEeD7lEIzSsXIIyZb1wKet5vKw3MfQEmGhKuTJcatA_BHG4JEAyC5asdUhu3ike9GfD37ujx_ce5i4-4Mrx5dRWlOBcA0vYJaTjKbPMS7Sd6L_VTUgoiyRsk3vDijJ03LE2OmcPVmKy1p7TRVzJxyEptSxAQKrI3RR27j8Tp5sqMtb3KE-89vdbwKH_7LTpH7JuasJekMC0bru-0AWksjqnZ3pxy2A",
    },
    {
      id: 2,
      title: "Smart Home Kit",
      descripcion:
        "Controla todo tu hogar desde tu smartphone con nuestro kit de automatización inteligente líder.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJHk4R7sVb7FW4cokbTZY6gaE_DfPOz0Jb4BFiWgg_wInTQ3KtSfwCQFo2y4z3H-nMeahd69AdHhdTTc_TTnIFsrDukdPEqj6BvVWFC1JRJ7gq2rHAV3DVzuGixhhVRmzvGmXUN9wx_Nb5aDL3zIYrKxSRmq3uxykVFnV3kyZvsUUmWmwdPjvmq82xzKIWQ-86TRxdrYqGhu5aQqxrmBa_05t3ytiBvdfDGXml01iFnEUQJntjflLSA",
    },
    {
      id: 3,
      title: "Colección Ejecutiva",
      descripcion:
        "Accesorios diseñados para el profesional moderno que valora la elegancia y la funcionalidad suprema.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvJgyOp7iOsvAYAZfhfXFzbxgqheBkDfosLJpmoGKvsx7hnmFogr7xzFEIPd5qa4_aGC-To1z70jYSNidj9YkEiEbDsJ3ELG4RraqsALQ7UcSu5BSKAeBfwfRSD11fiPo2rYcW5jYyua3I4gJC6kTpW0wkc9TqJ-1HgtgMA8S2jyEn49f4ZhWcZMhrBA80E8ArHNVGjxY1mQno4Qzoiaq2ctj35CW_def2U8xCk8OmkzGBOmr8ciiccg",
    },
  ];
  return (
    <>
      {promotions.map((p) => (
        <PromocionCard
          key={p.id}
          titleProp={p.title}
          descripcionProp={p.descripcion}
          imageUrl={p.imageUrl}
        />
      ))}
    </>
  );
}

export default App;
