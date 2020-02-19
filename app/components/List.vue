<template>
    <Page>
        <ActionBar>
            <Label text="List"></Label>
        </ActionBar>

        <GridLayout rows="*, auto">
            <ListView for="item in items">
                <v-template if="item === 'second'">
                    <Label :text="`second template for item ${item}`" />
                </v-template>
                <v-template>
                    <Label :text="`default template for item ${item}`" />
                </v-template>
            </ListView>

            <Button testID="goBackButton" class="btn btn-primary" text="Go back" @tap="$navigateBack()" row="1"/>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          'first',
          'second',
          'third'
        ]
      }
    },
    methods: {
      onTap() {
        if (this.message === 'Blank {N}-Vue app')
          this.message = 'Tapped!'
        else
          this.message = 'Tapped Again!'
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '~@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
