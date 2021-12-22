import Joi from "joi";

type formInputs = {
    headline: string,
    topic: number,
    message: string,
    fillTime: number
    email?: string
    validateEmail: boolean,
}

export type formValidationResult = {
    isValid: boolean,
    message?: string;
}

export class FormValidator {
    
    maxLength: number;
    minLength:number;
    placeHolders: any;

    private readonly validationSchema = Joi.object({
        headline: Joi.string().alphanum().min(3).max(100).required(),
        topic: Joi.number().integer().min(0).max(2).required(),
        message: Joi.string().alphanum().min(20).max(300).required(),
        fillTime: Joi.number().min(15).message("You filled the form too quickly and program thinks you are a spam bot. Please wait few seconds and try again.")
    })

    private readonly emailSchema = Joi.object({email: Joi.string().min(2).email({ tlds: {allow: false} }).required()});


    constructor(minLength:number, maxLength:number){
        this.minLength = minLength;
        this.maxLength = maxLength;
        this.placeHolders = {
            headline: "Example headline",
            topic: "Select topic...",
            messageArea: "20-300 characters",
            email: "example@example.com"
        }
    }

    getTopics():string[]
    {
        return ["Question", "Job", "Other"];
    }

    validate(values:formInputs):formValidationResult{
        let {error, value} = this.validationSchema.validate({headline: values.headline, topic: values.topic, message: values.message, fillTime: values.fillTime / 1000});

        if(values.validateEmail && !error){
            let {error, value} = this.emailSchema.validate({email:values.email});
            if(error){
                return {isValid: false, message:error.message};
            }
        }
        if(error){
            return {isValid: false, message:error.message};
        }

        return {isValid: true};
    }
}