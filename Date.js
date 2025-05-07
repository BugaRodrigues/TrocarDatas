class Get_Date
{
    constructor(value)
    {
        this.value = value;
    }
    Get_Day()
    {
        return /\d*$/.exec(this.value);
    }
    Get_Month()
    {
        return /\d*(?=\D(?=\d*$))/.exec(this.value);
    }
    Get_Year()
    {
        return  /^\d*/.exec(this.value);
    }
}