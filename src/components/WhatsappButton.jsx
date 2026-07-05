import { business } from "../data";

export default function WhatsappButton() {
  return <a className="whatsapp" href={business.whatsapp} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">💬</a>;
}
