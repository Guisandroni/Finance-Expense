import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const newTransactionParams = z.object({
  descricao: z.string(),
  valor: z.string(),
  categoria: z.string(),
  type: z.enum(['entrada', 'saida'])
})
type transactionsParamsInput = z.infer<typeof newTransactionParams>
export function Navbar() {
  const { register, handleSubmit, control } = useForm<transactionsParamsInput>({
    resolver: zodResolver(newTransactionParams)
  })

  const handleNewTransaction = (data: transactionsParamsInput) => {
    console.log(data)
  }

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


            <form
              onSubmit={handleSubmit(handleNewTransaction)}
              className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Descrição"
                {...register('descricao')}
                className="bg-base-gray4 text-white p-2 rounded"
              />
              <input
                type="number"
                placeholder="Valor"
                {...register('valor')}
                className="bg-base-gray4 text-white p-2 rounded"
              />
              <input
                type="text"
                placeholder="Categoria"
                {...register('categoria')}
                className="bg-base-gray4 text-white p-2 rounded"
              />


              <Controller 
              control={control}
              name='type'
              render={({field})=>{
                console.log(field)
                return(
                  <RadioGroup.Root
                   onValueChange={field.onChange}
                   value={field.value}
                className="flex flex-col gap-2.5"
                defaultValue="default"
                aria-label="View density"
              >
                <div className='flex flex-row gap-2'>
                  <RadioGroup.Item
                    className='group bg-base-gray4 w-full px-4 py-2 rounded-xl cursor-pointer focus:bg-green flex flex-row items-center justify-between'
                    value="entrada"
                    id="r1"
                  >

                    <h2 className='font-roboto text-white'>Entrada</h2>
                    <ArrowCircleUp size={32} className='text-green group-focus:text-white' />

                  </RadioGroup.Item>


                  <RadioGroup.Item
                    className={`group bg-base-gray4 w-full px-4 py-2 rounded-xl cursor-pointer  focus:bg-red flex flex-row items-center justify-between`}
                    value="saida"
                    id="r1"
                  >

                    <h2 className='font-roboto text-white'>Saída</h2>
                    <ArrowCircleDown size={32} className='text-red group-focus:text-white' />

                  </RadioGroup.Item>
                </div>

              </RadioGroup.Root>
                )
              }}
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