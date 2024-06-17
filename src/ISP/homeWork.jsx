// Bad Example of ISP principle
function BadOrderDetails({name,phone,email,address,product,amount}){
    return(
        <div>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{product}</p>
            <p>{amount}</p>
        </div>
    );
};


//Good example of ISP principle
function GoodCustomerDetails({name,address,phone,email}){
    return(
        <div>
            <p>{name}</p>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

function GoodProductDetails({product,amount}){
    return(
        <div>
            <p>{product}</p>
            <p>{amount}</p>
        </div>
    )
}