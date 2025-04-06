import Image from 'next/image'
import { Magnetic } from './ui/magnetic'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/nested-dialog'

export function ImageButton({ title, image }: { title: string; image: string }) {
  return (
    <Dialog>
      <Magnetic range={500} intensity={0.1}>
        <DialogTrigger asChild>
          <button className='rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300'>
            <Image src={image} alt={image} width={600} height={600} />
          </button>
        </DialogTrigger>
      </Magnetic>
      <DialogContent className='w-screen h-screen'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className='w-screen h-screen'>
          <Image src={image} alt={image} fill />
        </div>
      </DialogContent>
    </Dialog>
  )
}
