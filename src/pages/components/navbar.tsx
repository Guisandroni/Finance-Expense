import * as Dialog from '@radix-ui/react-dialog';

export function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 bg-base-gray4 rounded-2xl">
      <h1 className="font-bold font-roboto text-xl text-white">DT Money</h1>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-green px-4 py-2 rounded-lg cursor-pointer font-bold font-roboto text-md text-white">
            Nova Transação
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-gray3 p-6 rounded-lg w-[90vw] max-w-md">
            <Dialog.Title className="text-white font-roboto text-xl font-bold mb-4">
              Nova Transação
            </Dialog.Title>

            {/* Conteúdo de exemplo */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Descrição"
                className="bg-base-gray4 text-white p-2 rounded"
              />
              <input
                type="number"
                placeholder="Valor"
                className="bg-base-gray4 text-white p-2 rounded"
              />
               
              <button
                type="submit"
                className="bg-green text-white py-2 rounded-lg font-roboto font-bold"
              >
                Salvar
              </button>
            </form>

            <Dialog.Close asChild>
              <button
                className="absolute top-2 right-2 text-base-gray6 hover:text-white"
                aria-label="Fechar"
              >
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}