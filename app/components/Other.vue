<template>
    <Page>
        <ActionBar>
            <Label text="Other"></Label>
        </ActionBar>

        <GridLayout rows="*, auto">
            <Label automationText="otherPageLabel"
                   :text="message"
                   class="info" @tap="onTap" />

            <Button testID="goBackButton" class="btn btn-primary" text="Go back" @tap="$navigateBack()" row="1"/>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        message: "Other page"
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
