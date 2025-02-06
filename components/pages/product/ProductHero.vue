<script setup lang="ts">
import type { AvailableColorItem, Product } from '~/@types/product';
import RatingIndicator from '~/components/shared/RatingIndicator.vue';
import { useProductHelper } from '~/composables/product/useProductHelper';
import ProductActionBlock from '~/components/pages/product/ProductActionBlock.vue';
import ExpansionPanel from '~/components/ui/expansion-panel/ExpansionPanel.vue';
import ExpansionPanelBody from '~/components/ui/expansion-panel/ExpansionPanelBody.vue';
import ExpansionPanelTitle from '~/components/ui/expansion-panel/ExpansionPanelTitle.vue';
import ProductTimer from '~/components/pages/product/ProductTimer.vue';
import ProductSlider from '~/components/pages/product/ProductSlider.vue';

const props = defineProps<{
    product: Product,
}>()

const route = useRoute();
const router = useRouter();

const { isShowOldPrice, isDiscountActive } = useProductHelper(props.product);

const getInitialActiveColor = () => props.product.available_colors.find(item => item.color === route.query.color)?.color ?? props.product.available_colors[0].color;
const activeProductColor = ref(getInitialActiveColor())
const changeActiveProductColor = (colorItem: AvailableColorItem) => {
    if (!colorItem.available || activeProductColor.value === colorItem.color) {
        return;
    }

    activeProductColor.value = colorItem.color;
    router.replace({
        query: {
            ...route.query,
            color: colorItem.color,
        }
    })
}
</script>

<template>
    <div :class="$style.wrapper">
        <ProductSlider :product="product"/>
        <div>
            <div :class="$style.productBaseInfo">
                <div :class="$style.ratingRow">
                    <RatingIndicator :rating="product.rating"/>
                    <div>
                        {{ product.review_count }} Reviews
                    </div>
                </div>
                <div :class="$style.productTitle">{{ product.title }}</div>
                <div :class="$style.productDescription">{{ product.description || 'No description' }}</div>
                <div :class="$style.productPriceBlock">
                    <div :class="$style.productPrice">
                        ${{ product.price.toFixed(2) }}
                    </div>
                    <div
                        v-if="isShowOldPrice"
                        :class="$style.productOldPrice"
                    >
                        ${{ product.old_price.toFixed(2) }}
                    </div>
                </div>
            </div>
            <div :class="$style.divider"/>
            <template v-if="isDiscountActive">
                <div>
                    <div>Offer expires in:</div>
                    <ProductTimer :expire="product.discount!.expires"/>
                </div>
                <div :class="$style.divider"/>
            </template>
            <div :class="$style.productCharacteristics">
                <div>
                    <div :class="$style.productCharacteristicsTitle">
                        Measurements
                    </div>
                    <div>{{ product.measurements }}</div>
                </div>
                <div>
                    <div :class="$style.productCharacteristicsTitle">
                        Choose Color
                    </div>
                    <div>{{ activeProductColor }}</div>
                    <div
                        v-if="product.available_colors.length"
                        :class="$style.productColorSlider"
                    >
                        <button
                            v-for="item in product.available_colors"
                            :key="item.color"
                            :class="[
                                $style.colorBlock,
                                {
                                    [$style._active]: activeProductColor === item.color,
                                    [$style._unavailable]: !item.available,
                                }
                            ]"
                            @click="changeActiveProductColor(item)"
                        >
                            <img :src="item.image" :alt="item.color">
                        </button>
                    </div>
                </div>
            </div>
            <div :class="$style.divider"/>
            <ProductActionBlock :counter-max="product.balance"/>
            <div :class="$style.divider"/>
            <dl :class="$style.additionalCharacteristics">
                <div
                    v-if="product.sku"
                    :class="$style.additionalCharacteristicsRow"
                >
                    <dt :class="$style.additionalCharacteristicsTitle">SKU</dt>
                    <dd>{{ product.sku }}</dd>
                </div>
                <div
                    v-if="product.category.length"
                    :class="$style.additionalCharacteristicsRow"
                >
                    <dt :class="$style.additionalCharacteristicsTitle">CATEGORY</dt>
                    <dd>{{ product.category.join(', ') }}</dd>
                </div>
            </dl>
            <div :class="$style.expanderList">
                <ExpansionPanel v-if="product.additional_info?.details || product.additional_info?.packaging.length">
                    <ExpansionPanelTitle>Additional  Info</ExpansionPanelTitle>
                    <ExpansionPanelBody>
                        <div
                            v-if="product.additional_info?.details"
                            :class="$style.expansionBodyBlock">
                            <div :class="$style.expansionBodyTitle">Details</div>
                            <div :class="$style.expansionBodyValue">{{ product.additional_info.details }}</div>
                        </div
                        >
                        <div
                            v-if="product.additional_info?.packaging.length"
                            :class="$style.expansionBodyBlock"
                        >
                            <div :class="$style.expansionBodyTitle">Packaging</div>
                            <div
                                v-for="(packaging, index) in product.additional_info.packaging"
                                :key="index"
                                :class="$style.expansionBodyValue"
                            >
                                {{ packaging }}
                            </div>
                        </div>
                    </ExpansionPanelBody>
                </ExpansionPanel>
                <ExpansionPanel v-if="product.questions?.length">
                    <ExpansionPanelTitle>Questions</ExpansionPanelTitle>
                    <ExpansionPanelBody>
                        <div
                            v-for="(question, index) in product.questions"
                            :key="index"
                            :class="$style.expansionBodyBlock"
                        >
                            <div :class="$style.expansionBodyTitle">{{ question.title }}</div>
                            <div :class="$style.expansionBodyValue">{{ question.answer }}</div>
                        </div>
                    </ExpansionPanelBody>
                </ExpansionPanel>
                <!--<ExpansionPanel v-if="product.reviews?.length">-->
                <!--    <ExpansionPanelTitle>Reviews ({{ product.review_count }})</ExpansionPanelTitle>-->
                <!--    <ExpansionPanelBody>-->
                <!--        In Progress-->
                <!--        &lt;!&ndash;<div&ndash;&gt;-->
                <!--        &lt;!&ndash;    v-for="review in product.reviews"&ndash;&gt;-->
                <!--        &lt;!&ndash;    :key="review.id"&ndash;&gt;-->
                <!--        &lt;!&ndash;&gt;&ndash;&gt;-->
                <!--        &lt;!&ndash;    <div>{{ review.user.name }}</div>&ndash;&gt;-->
                <!--        &lt;!&ndash;    <div>{{ review.description }}</div>&ndash;&gt;-->
                <!--        &lt;!&ndash;</div>&ndash;&gt;-->
                <!--    </ExpansionPanelBody>-->
                <!--</ExpansionPanel>-->
            </div>
        </div>
    </div>
</template>

<style module lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 80px;

    @include respond-to(d) {
        flex-direction: row;
        gap: 64px;
    }
}

.divider {
    width: 100%;
    height: 1px;
    margin: 24px 0;
    background: $neutral-02;
}

.productBaseInfo {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.ratingRow {
    display: flex;
    gap: 10px;

    @include text(caption-2);
}

.productTitle {
    @include heading(heading-4);
}

.productDescription {
    color: $neutral-04;
    @include text(body-2);
}

.productPriceBlock {
    display: flex;
    align-items: center;
    gap: 12px;
}

.productPrice {
    @include heading(heading-6);
}

.productOldPrice {
    color: $neutral-04;
    text-decoration: line-through;
    font-size: 20px;
    line-height: 28px;
}

.productCharacteristics {
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-transform: capitalize;

    @include text(body-1);
}

.productCharacteristicsTitle {
    margin-bottom: 8px;
    color: $neutral-04;
    @include text(body-2, semi);
}

.productColorSlider {
    display: flex;
    gap: 8px;
    margin-top: 16px;
}

.colorBlock {
    width: 70px;
    height: 70px;
    border: 1px solid transparent;
    transition: border-color $transition-duration;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
    }

    &._active {
        border-color: $neutral-07;
    }

    &._unavailable {
        opacity: 0.5;
        pointer-events: none;
    }
}

.additionalCharacteristics {
    text-transform: capitalize;
    @include text(caption-2);
}

.additionalCharacteristicsRow {
    display: flex;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
}

.additionalCharacteristicsTitle {
    width: 120px;
    padding-right: 8px;
    color: $neutral-04;
}

.expanderList {
    margin-top: 24px;
}

.expansionBodyBlock {
    &:not(:last-child){
        margin-bottom: 16px;
    }
}

.expansionBodyTitle {
    margin-bottom: 8px;
    color: $neutral-04;

    @include text(caption-1, semi);
}

.expansionBodyValue {
    @include text(caption-2);
}
</style>
