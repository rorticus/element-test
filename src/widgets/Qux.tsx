import { create, tsx } from "@dojo/framework/core/vdom";
import WidgetBase from '@dojo/framework/core/WidgetBase';

export interface QuxChild {
    num?: string;
}

export class Qux extends WidgetBase<QuxChild> {
    render() {
    console.log('qux render', this.properties);

    return <div styles={{backgroundColor: 'red', color: 'white'}}>
        The number is {String(this.properties.num)}
    </div>;
    }
}

// const factory = create().properties<QuxChild>();

// export const Qux = factory(function Qux({ properties }) {
//     const { num = 0} = properties();

//     console.log('qux render', num);

//     return <div styles={{backgroundColor: 'red', color: 'white'}}>
//         The number is {String(num)}
//     </div>;
// });

export default Qux;