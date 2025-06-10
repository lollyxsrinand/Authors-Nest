import Image from 'next/image'

const Icon = ({name, size} : {name : string, size : number}) => {
  return <Image className="" alt={name} src={`${name}.svg`} height={size} width={size} />
}

export default Icon