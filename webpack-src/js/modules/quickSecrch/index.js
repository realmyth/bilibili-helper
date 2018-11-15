/**
 * Author: DrowsyFlesh
 * Create: 2018/11/14
 * Description:
 */

import {Feature} from 'Libs/feature';

export class QuickSearch extends Feature {
    constructor() {
        super({
            name: 'quickSearch',
            kind: 'popup',
            settings: {
                on: false,
                toggle: false,
                title: '视频快速跳转',
                description: '待开发',
            }
        })
    }
}