import Vue from "nativescript-vue";

import Home from "./components/Home";


// ADD testID property - TODO: enable only in TESTING env.
import * as viewCommon from 'tns-core-modules/ui/core/view'
import * as utils from 'tns-core-modules/utils/native-helper'
import {Property} from 'tns-core-modules/ui/core/properties/properties'

export const testIDProperty = new Property({
    name: "testID",
    defaultValue: "",
})
testIDProperty.register(viewCommon.View)

viewCommon.View.prototype[testIDProperty.setNative] = function (value) {
    if(global.android) {
        const id = utils.ad.resources.getId(':id/nativescript_test_id')
        this.nativeViewProtected.setTag(id, value)
        this.nativeViewProtected.setTag(value)
        // this.nativeViewProtected.setContentDescription(value)
    } else {
        this.nativeViewProtected.accessibilityIdentifier = value
    }
}


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
