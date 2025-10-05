import {useState} from "react";
import {ChevronDownIcon} from '@heroicons/react/24/outline'

function Accordion() {

    const [open, setOpen] = useState(null);
    const data = [
        {
            id: 1,
            title: 'Header One',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit doloribus iste repellendus, veritatis. Aliquid debitis odio optio sit voluptatem',
        },
        {
            id: 2,
            title: 'Header Two',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit doloribus iste repellendus, veritatis. Aliquid debitis odio optio sit voluptatem',
        },
        {
            id: 3,
            title: 'Header Three',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit doloribus iste repellendus, veritatis. Aliquid debitis odio optio sit voluptatem',
        },
        {
            id: 4,
            title: 'Header Four',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit doloribus iste repellendus, veritatis. Aliquid debitis odio optio sit voluptatem',
        }
    ]

    return (
        <div className="accordion">
            {
                data.map(item => <AccordionItem key={item.id} item={item} setOpen={setOpen} open = {open}/>)
            }
        </div>
    )
}

export default Accordion;

function AccordionItem({item, setOpen, open}) {

    const isOpen = item.id === open;
    return (
        <div className={`accordion-item ${isOpen ? 'accordion__expanded' : ''}`} key={item.id}>
            <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
                <div>{item.title}</div>
                <ChevronDownIcon style={
                    {
                        width: '1.2rem',
                        transition: 'all .3s ease-out',
                        rotate: isOpen ? '180deg' : '0deg'
                    }
                }/>
            </div>
            <div className="accordion-item__content">
                {item.content}
            </div>
        </div>
    )
}