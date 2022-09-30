<template>
    <div class="preview">
        <div v-for="(article,index) in articlePreviewList" class="preview__body">
            <h2 class="preview__body__title">{{article.title}}</h2>
            <p class="preview__body__content">
                {{article.content}}
            </p>
            <div class="preview__body__below">
                <div class="preview__body__below__left">
                    <Label v-for="str in article.labelList" class="preview__body__below__left__label" :value="str" />
                </div>
                <p class="preview__body__below__time">{{article.time}}</p>
            </div>
            <Line v-if="index != articlePreviewList.length-1" />
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import Label from '../../components/Label.vue'
import Line from '../../components/Line.vue'
export default {
    components: {
        Label,
        Line
    },
    setup() {
        const articlePreviewList = reactive([
            {
                title: "什么是幸运0",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            }, {
                title: "什么是幸运1",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            }
            , {
                title: "什么是幸运2",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            },
            {
                title: "什么是幸运2",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            },
            {
                title: "什么是幸运2",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            },
            {
                title: "什么是幸运2",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            },{
                title: "什么是幸运2",
                content: "什么是幸运？在遇见嘉然前我每次都会犹豫地给出不同的答案，在遇见嘉然后就有了标准答案。遇到嘉然，就是此生最大的幸运了。嘉然是秋天，是光源，是珍馐，是爱情，是捕获我躁动心脏的势阱，是造物主抽选人间所有美好摹",
                labelList: ['技术杂谈', '感悟'],
                time: '2022.7.13'
            }
        ])

        return {
            articlePreviewList
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/setting/var.scss';

.preview {
    margin-top: -.5rem;

    &__body {
        &__title {
            font-size: $font-primary-title;
            margin-top: .5rem;
            margin-bottom: .15rem;
        }

        &__content {
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: .15rem;
            letter-spacing: .5px;
            height: .7rem;
            line-height: .375rem;
            font-size: $font-primary-contet;
        }

        &__line {
            margin-right: .15rem;
        }

        &__below {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: .6rem;

            &__left__label {
                margin-right: 10px;
            }

            &__time {
                font-size: .15rem;
                font-weight: bold;
                letter-spacing: 0;
            }
        }
    }
}

.dark {
    .preview {
        &__body {
            &__title {
                color: $color-dark-title;
            }

            &__content {
                color: $color-dark-content;
            }

            &__line {
                margin-right: .15rem;
            }

            &__below {

                &__time {
                    color: $color-drak-label;
                }
            }
        }
    }
}
</style>