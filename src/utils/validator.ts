

const Validator = {
    email: (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    },
    name: (name: string) => {
        return name.length > 0;
    },
    phone: (phone: string) => {
        return phone.length > 0;
    },
    message: (message: string) => {
        return message.length > 0;
    }
}

export default Validator