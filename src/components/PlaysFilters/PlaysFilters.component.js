import { Disclosure } from '@headlessui/react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
function MyDisclosure(props) {
    return (
        <Disclosure>
            {
                ({ open }) => (
                    <div className='bg-gray-100 my-4'>
                        <Disclosure.Button className="py-2 flex items-center gap-3 ">
                           {
                               open?<BiChevronUp/>:<BiChevronDown/>
                           }
                            <span className={open?'text-red-500':'text-gray-700'} >
                            {props.title}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500">
                           <div className='flex item-center gap-2 flex-wrap w-1/2' >
                               {
                                   props.tags.map((tag)=>(
                                       <>
                                        <div  className='border border-gray-200 px-1'>
                                            <span className='text-red-500 text-sm' >{tag}</span>
                                        </div>
                                       </>
                                   ))
                               }
                           </div>
                        </Disclosure.Panel>
                    </div>
                )
            }

        </Disclosure>
    )
};
export default MyDisclosure;