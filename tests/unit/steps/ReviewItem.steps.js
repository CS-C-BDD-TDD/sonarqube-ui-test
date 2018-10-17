import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import ReviewItem from "src/components/ReviewItem.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/ReviewItem.feature");

defineFeature(feature, test => {
  let localVue;
  let propData;
  let wrapper;
  /**
   * Initialize the Vue.js rendering engine with Quasar and font-awesome
   */
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar, {
      config: {},
      iconSet: iconSet
    });
  });

  const TEST_DATA = {
    stixId: "1",
    actionDate: "09/15/2018",
    objectType: "Indicator",
    field: "Title",
    value: "I contain a SSN",
    status: "New"
  };

  const givenIHaveDataForAnReviewItem = given => {
    given("data for an individual review item", () => {
      propData = {
        TEST_DATA
      };
    });
  };

  /**
   * There really is not operation here, but we need a `when` clause
   */
  const whenIRendertheReviewItemComponent = when => {
    when("I render the review item component", () => {
      wrapper = mount(ReviewItem, propData);
    });
  };

  test("Displaying a review item", ({ given, when, then }) => {
    /**
     * Load our Default layout into the Vue rendering engine
     */
    givenIHaveDataForAnReviewItem(given);

    whenIRendertheReviewItemComponent(when);
    // /**
    //  * There really is not operation here, but we need a `when` clause
    //  */
    // when("I render the review item component", () => {
    //   wrapper = mount(ReviewItem, propData);
    // });

    then("I should see a Stix id", () => {
      expect(wrapper.find("tr")).toBeTruthy();
      let tr = wrapper.find("tr");
      expect(tr.find("td").element).toBeTruthy();
      let td = wrapper.find("td");
      expect(td.contains(TEST_DATA.stixId));
    });

    then("I should see an Action Date", () => {
      let element = wrapper.find("tr").findAll("td");
      expect(element[1].contains(TEST_DATA.actionDate));
    });

    then("I should see an Object Type", () => {
      let element = wrapper.find("tr").findAll("td");
      expect(element[2].contains(TEST_DATA.objectType));
    });

    then("I should see a Field", () => {
      let element = wrapper.find("tr").findAll("td");
      expect(element[3].contains(TEST_DATA.field));
    });

    then("I should see a Value as a Popup Edit component", () => {
      let element = wrapper.find("tr").findAll("td");
      expect(element[4].contains(TEST_DATA.value));
    });

    then("I should see a Status", () => {
      let element = wrapper.find("tr").findAll("td");
      expect(element[5].contains(TEST_DATA.value));
    });

    then("I should see an Action Combo box", () => {
      let element = wrapper
        .find("tr.td")
        // .findAll("td")
        .find("div.q-input-target.ellipsis");
      expect(element[6].contains(TEST_DATA.value));
    });
  });

  test("Modify the value of a review item", ({ given, when, then }) => {
    /**
     * Load our Default layout into the Vue rendering engine
     */
    givenIHaveDataForAnReviewItem(given);

    whenIRendertheReviewItemComponent(when);

    when("I select the value", () => {
      expect(
        wrapper
          .find("tr")
          .find("td.text-left.cursor-pointer")
          .contains(TEST_DATA.value)
      );
    });

    when("I change the value", () => {
      wrapper.setValue("tr.td.text-left.cursor-pointer", "Mark Facemire");
    });

    then("the underlying data object should be updated", () => {
      expect(wrapper.vm.$data.value.toBe("Mark Facemire"));
    });
  });
});
