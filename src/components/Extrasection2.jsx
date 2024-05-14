

const Extrasection2 = () => {
    const data=[
        {
            'id':1,
           image:'https://i.ibb.co/HYx6n0S/2149705548.jpg' 
        },
        
        { 
            'id':2,
           image:'https://i.ibb.co/smmshQC/2150260871.jpg' 
        },
        
        {
            'id':3,
           image:'https://i.ibb.co/dPRGgB8/2150260875.jpg' 
        },
        
        {
            'id':4,
           image:'https://i.ibb.co/BPDHFs5/2148978137.jpg' 
        },
        
        {
            'id':5,
           image:'https://i.ibb.co/x6TLLNz/6438593-26237.jpg' 
        },
        
        {
            'id':6,
           image:'https://i.ibb.co/q0QtbC4/beauty-product-close-up-personal-accessory-fashion-collection-generative-ai.jpg' 
        },
        
        {
            'id':7,
           image:'https://i.ibb.co/7yt1kpJ/2148328720.jpg' 
        },
        {
            'id':8,
           image:'https://i.ibb.co/FxLhzmW/1165207-128646-ORMZUV-612.jpg' 
        },
        
    ]
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    data.map(d=> <img key={d.id} className=" w-[170px] h-[100px] md:w-[300px] md:h-[250px] rounded-lg" src={d.image} alt="" />)
                }
               
                
            </div>
        </div>
    );
};

export default Extrasection2;