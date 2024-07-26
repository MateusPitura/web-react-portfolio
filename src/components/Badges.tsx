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
                        <img id={item.reference} className='rounded-lg' src={item.imageUrl} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Badges;