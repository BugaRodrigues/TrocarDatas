class Get_Date
{
    constructor(value)
    {
        this.value = value;
    }

    #Get_Data()
    {
        return this.value.match(/\d{2,4}\D\d{1,2}\D\d{1,2}/)
    }

    Get_Day()
    {
        return /\d*$/.exec(this.#Get_Data());
    }   
    Get_Month()
    {
        return /\d*(?=\D(?=\d*$))/.exec(this.#Get_Data());
    }
    Get_Year()
    {
        return  /^\d*/.exec(this.#Get_Data());
    }
}