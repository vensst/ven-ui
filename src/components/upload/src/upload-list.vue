<template>
  <transition-group
    tag="ul"
    :class="[
      'ven-upload-list',
      'ven-upload-list--' + listType,
      { 'is-disabled': disabled },
    ]"
    name="ven-list"
  >
    <li
      v-for="file in files"
      :class="[
        'ven-upload-list__item',
        'is-' + file.status,
        focusing ? 'focusing' : '',
      ]"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="ven-upload-list__item-thumbnail"
          v-if="
            file.status !== 'uploading' &&
            ['picture-card', 'picture'].indexOf(listType) > -1
          "
          :src="file.url"
          alt=""
        />
        <a class="ven-upload-list__item-name" @click="handleClick(file)">
          <i class="ven-icon-document"></i>{{ file.name }}
        </a>
        <label class="ven-upload-list__item-status-label">
          <i
            :class="{
              'ven-icon-upload-success': true,
              'ven-icon-circle-check': listType === 'text',
              'ven-icon-check':
                ['picture-card', 'picture'].indexOf(listType) > -1,
            }"
          ></i>
        </label>
        <i
          class="ven-icon-close"
          v-if="!disabled"
          @click="$emit('remove', file)"
        ></i>
        <i class="ven-icon-close-tip" v-if="!disabled">{{
          t("el.upload.deleteTip")
        }}</i>
        <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <ven-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)"
        >
        </ven-progress>
        <span
          class="ven-upload-list__item-actions"
          v-if="listType === 'picture-card'"
        >
          <span
            class="ven-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="ven-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="ven-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="ven-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
import Locale from "../../../mixins/locale";
import VenProgress from "../../progress";

export default {
  name: "VenUploadList",

  mixins: [Locale],

  data() {
    return {
      focusing: false,
    };
  },
  components: { VenProgress },

  props: {
    files: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    handlePreview: Function,
    listType: String,
  },
  methods: {
    parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    },
  },
};
</script>
