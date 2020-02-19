<template>
    <Page>
        <ActionBar>
            <Label testID="actionBarTitle" text="Home"></Label>
        </ActionBar>

        <GridLayout rows="*, auto, auto, auto, auto">
            <Label testID="welcomeLabel"
                   :text="message"
                   class="info"
                   @tap="onTap"/>

            <Button testID="gotoOtherButton"
                    class="btn btn-primary"
                    @tap="gotoOther"
                    text="Go To Other Page" row="1"/>
            <Button testID="gotoListButton" class="btn btn-primary"
                    @tap="gotoList" text="Go To List Page" row="2"/>
            <Button testID="showAlertButton" class="btn btn-primary"
                    @tap="showAlert" text="Show alert" row="3"/>

            <ScrollView testID="scrollView" orientation="horizontal" row="4">
                <StackLayout orientation="horizontal">
                    <Label v-for="i in 10"
                           :text="`Item ${i}`"
                           :key="i" padding="24"/>
                </StackLayout>
            </ScrollView>
        </GridLayout>
    </Page>
</template>

<script>
  import Other from "./Other";
  import List from "./List";

  export default {
    data() {
      return {
        message: "Blank {N}-Vue app"
      }
    },
    methods: {
      onTap() {
        if (this.message === 'Blank {N}-Vue app')
          this.message = 'Tapped!'
        else
          this.message = 'Tapped Again!'
      },
      gotoOther() {
        this.$navigateTo(Other)
      },
      gotoList() {
        this.$navigateTo(List)
      },
      showAlert() {
        alert('This is a test alert!')
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
