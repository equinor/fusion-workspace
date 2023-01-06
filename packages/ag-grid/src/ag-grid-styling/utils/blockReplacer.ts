/**
 * Finds start and end index by a given classname
 * @param className - Name to find
 * @param target - Target string to look through
 * @returns - Start and end index
 */
const findBlockByClassName = (className: string, target: string) => {
    const start = target.search(className);
    const { end } = findBlockRange(target.slice(start))
    return {
        start,
        end: start+end+1,
    }
}


/**
 * Validates that a string contains the same amount of `{` and `}`
 * @param target - String to look through
 */
export const validateBlock = (target: string) => {
    let blocks = 0;

    Array.from(target).forEach((v) => {
        if(v === "{"){
            blocks++;
        }
        if(v === "}"){
            blocks--;
        }
    })
    if(blocks !== 0){
        throw new Error("Invalid blocks")
    }
}


/** Replaces a css class with the given input */
export const replaceCssClass = (className: string, classTemplate: string, replaceWith: string) => {
    const { end, start } = findBlockByClassName(className, classTemplate)
    const prefix = classTemplate.slice(0, start);
    const suffix = classTemplate.slice(end);

    return prefix + replaceWith + suffix
}



/**
 * Finds start and stop indexes for a given block `{ }`
 * @param target - String containing the block
 * @returns - Start and stop indexes
 */
export const findBlockRange = (target: string) => {
    validateBlock(target)

        const res = {
            blockStart: -1,
            blockEnd: -1,
            skips: 0,
        }
    
        Array.from(target).forEach((v,i) => {
            if(res.blockStart === -1 && v === "{"){
                res.blockStart = i;
            }
    
            if(v === "{" && i !== res.blockStart){
                res.skips++;
            }
            if(v === "}"){
              if(res.skips === 0){
                res.blockEnd = i;
                return;
              }else{
                res.skips--;
              } 
            }
    
        })
        return { 
            start: res.blockStart,
            end: res.blockEnd
        };
}

export function replaceCssClasses(classes: CssReplace[], classTemplate: string){
    let res = classTemplate;

    classes.forEach(({className, replaceWith}) => {
        res = replaceCssClass(`\n${className}`, res, replaceWith)
    })

    return res;
}

export abstract class CSSBlocks {

    constructor(){
        throw new Error("Static classes cannot be instantiated")
    }

    static findBlockRange = findBlockRange;

    static validateBlocks = validateBlock;

    static findBlockByClassName = findBlockByClassName;

    static replaceCssClass = replaceCssClass

    static replaceCssClasses = replaceCssClasses

}

export type CssReplace = {
    className: string;
    replaceWith: string
};