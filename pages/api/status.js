// endpoint para mostrar o status do sistema. request trata do que entra na função e o response trata do quero responder
function status(request, response) {
  response.status(200).json({ chave: "valor" });
}

export default status;
