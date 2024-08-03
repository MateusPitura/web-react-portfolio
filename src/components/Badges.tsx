import { Badge } from "../types/Badge";

interface BadgesProperties {
    badges?: Badge[];
}

function Badges({ badges }: BadgesProperties) {
    return (
        <div className="pt-5 flex flex-wrap gap-1">
            {badges?.map(item =>
                <div key={item.id}>
                    <div className='flex justify-center flex-wrap'>
                        <img id={item.reference} className='rounded-lg h-[1.75rem]' src={item.imageUrl} alt={`Stack ${item.reference}`} height={28}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Badges;