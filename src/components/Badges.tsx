interface BadgesProperties {
    links: string[];
}

function Badges({ links }: BadgesProperties) {
    return (
        <div className="pt-5 flex flex-wrap gap-1">
            {links?.map((item, index) =>
                <div key={index}>
                    <div className='flex justify-center flex-wrap'>
                        <img className='rounded-lg' src={item} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Badges;