<template>
  <el-row class="h-114px flex items-center justify-between p-x-40px box-border header">
    <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11" class="flex-1 logo">
      <div class="flex items-center">
        <img src="@/assets/logo1.png" alt="" class="mr-20px logo1">
        <img src="@/assets/logo2.png" alt="" class="logo2">
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="flex-1">
      <div class="flex items-center justify-end nav text-#000">
        <div v-if="isMobile" class="cursor-pointer mr-20px" @click="toggleMenu">
          <!--        <img src="@/assets/hamburger.png" alt="Menu" class="w-32px h-32px">-->
          三
        </div>
        <div v-else class="mr-20px cursor-pointer"
             :class="item.active === true ? 'active': ''"
             v-for="(item, id) in navList"
             :key="id"
             @click="handleJumpUrl(item.link)">
          {{ item.title }}
        </div>
      </div>
    </el-col>
  </el-row>

  <div v-if="isMobile && isMenuOpen" class="mobile-nav">
    <div class="flex flex-col items-center">
      <div v-for="(item, id) in navList" :key="id" class="py-16px cursor-pointer w-full text-center"
           :class="item.active === true ? 'active': ''"
           @click="handleJumpUrl(item.link)">
        {{ item.title }}
      </div>
    </div>
  </div>

  <el-row class="h-366px text-#fff box-border flex-col banner">
    <div class="mb-34px title">
      Advancing open access to knowledge
    </div>
    <div class="mb-20px description">
      Open access is a key part of our mission to help researchers advance science for societal progress.
    </div>
    <div class="mb-20px">
      <el-button
          class="text-14px"
          style="background: #7a7fc9; color: #fff;border: none; box-shadow: 0px 4px 4px 0px #00000040;"
          @click="handleJumpJULAC"
      >
        Agreement between JULAC and Elsevier
      </el-button>
    </div>
    <!--    <img src="@/assets/banner-right.png" class="absolute right-0 top-0">-->
  </el-row>

  <el-row class="text-20px box-border mt-20px p-x-6rem">
    Choose your institution
  </el-row>

  <el-row class="justify-center box-border bg-#fff flex items-center p-x-20px cooperate h-140px">
    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkchinese.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'CUHK' || activeHoverUniversity === 'CUHK' }"
                 @click="handleCooperate('CUHK')"
                 @mouseenter="handleHover('CUHK')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkcity.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'CityU' || activeHoverUniversity === 'CityU' }"
                 @click="handleCooperate('CityU')"
                 @mouseenter="handleHover('CityU')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkeducation.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'EdUHK' || activeHoverUniversity === 'EdUHK' }"
                 @click="handleCooperate('EdUHK')"
                 @mouseenter="handleHover('EdUHK')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkbaptist.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'HKBU' || activeHoverUniversity === 'HKBU' }"
                 @click="handleCooperate('HKBU')"
                 @mouseenter="handleHover('HKBU')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>  

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkpolytechnic.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'PolyU' || activeHoverUniversity === 'PolyU' }"
                 @click="handleCooperate('PolyU')"
                 @mouseenter="handleHover('PolyU')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>     

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" class="flex items-center" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hklingnan.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'Lingnan' || activeHoverUniversity === 'Lingnan' }"
                 @click="handleCooperate('Lingnan')"
                 @mouseenter="handleHover('Lingnan')"
            >
          </div>
        </template>
      </el-popover>
    </el-col> 

    <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" class="flex items-center" align="middle">
      <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content='Please click to choose your instituion'>
        <template #reference>
          <div>
            <img src="@/assets/hkuniversity.png"
                 class="cursor-pointer normal-img"
                 :class="{ 'active': activeUniversity === 'HKU' || activeHoverUniversity === 'HKU' }"
                 @click="handleCooperate('HKU')"
                 @mouseenter="handleHover('HKU')"
            >
          </div>
        </template>
      </el-popover>
    </el-col>
  </el-row>

  <el-row class="p-t-64px p-b-50px justify-center bg-#f2f2f2 text-#000">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="box-border p-x-120px">
      <div class="text-22px mb-40px title">{{ cooperateInfo.title }}</div>
      <div class="text-16px lh-[1.8] description">{{ cooperateInfo.description }}</div>
      <div class="mt-50px btn-list">
        <el-button
            v-if="!['HKBU', 'Lingnan', 'EdUHK'].includes(activeUniversity)"
            class="text-14px"
            style="background:#fd622e; color: #fff;border: none; box-shadow: 0px 4px 4px 0px #00000040;"
            @click="handleJumpFind"
        >
          Find a participating journal
        </el-button>
        <el-button
            v-if="activeUniversity != 'HKBU' "
            class="text-14px"
            style="background: #7694dc; color: #fff;border: none; box-shadow: 0px 4px 4px 0px #00000040;"
            @click="handleJumpLibrary(cooperateInfo.libraryUrl)"
        >
          {{ cooperateInfo.nameEngAbbr }} Library
        </el-button>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="searchList">
      <div v-if="activeUniversity != 'HKBU'"
           class="text-16px font-bold title">Participating journals for {{ cooperateInfo.nameEngAbbr }}
      </div>
      <el-input
          v-model="searchVal"
          class="mt-14px"
          style="width: 500px"
          placeholder="Type in keyword to search for Journal"
          clearable
          :suffix-icon="Search"
          @change="handleSearchChange"
      />
      <div class="ml-20px mt-10px flex items-center text-#f0bdac university-literature">
        <div class="text-12px">Quick search by First letter：</div>
        <span v-for="(letter, id) in letterList"
              :key="id"
              class="m-x-2px m-y-0 text-14px cursor-pointer"
              @click="handleFilterLetter(letter)"
        >
          {{ letter }}
        </span>
        <span class="cursor-pointer m-l-4px" @click="handleFilterLetter('Others')">Others</span>
      </div>
      <ul class="p-l-20px">
        <li v-for="(item, id) in paginatedData.datas"
            :key="id"
            class="w-480px p-y-4px p-l-10px box-border mb-16px cursor-pointer bg-#cecece rounded-2"
            @click="handleJumpUrl(item.url)"
        >
          {{ item.title }}
        </li>
      </ul>

      <el-pagination layout="prev, pager, next"
                     size="small"
                     :total="paginatedData.total"
                     :current-page="pageParams.current"
                     :page-size="pageParams.pageSize"
                     @current-change="handleChangePage"/>
    </el-col>
  </el-row>

<!--  <el-row class="p-t-22px p-b-22px box-border elsevier-tab bg-#fff text-#000">-->
<!--    <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="box-border p-x-80px">-->
<!--      <div class='text-24px text-center'>-->
<!--&lt;!&ndash;        <a class="elsevier-tab-item active cursor-pointer" @click="handleJumpAnchor('#home')">&ndash;&gt;-->
<!--&lt;!&ndash;          Elsevier Open Access Platform&ndash;&gt;-->
<!--&lt;!&ndash;        </a>&ndash;&gt;-->
<!--        &lt;!&ndash;        <a class="elsevier-tab-item cursor-pointer" @click="handleJumpAnchor('#publish')">&ndash;&gt;-->
<!--        &lt;!&ndash;          How to publish OA journals&ndash;&gt;-->
<!--        &lt;!&ndash;        </a>&ndash;&gt;-->
<!--        &lt;!&ndash;        <a class="elsevier-tab-item cursor-pointer" @click="handleJumpAnchor('#webinars')">&ndash;&gt;-->
<!--        &lt;!&ndash;          Webinars and training&ndash;&gt;-->
<!--        &lt;!&ndash;        </a>&ndash;&gt;-->
<!--        <a class="elsevier-tab-item cursor-pointer" @click="handleJumpAnchor('#centers')">-->
<!--          Elsevier Open Access Resource Center-->
<!--        </a>-->
<!--&lt;!&ndash;        <a class="elsevier-tab-item cursor-pointer" @click="handleJumpAnchor('#FAQs')">&ndash;&gt;-->
<!--&lt;!&ndash;          FAQs&ndash;&gt;-->
<!--&lt;!&ndash;        </a>&ndash;&gt;-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-row>-->

  <el-row id="centers" class="p-y-40px box-border bg-#fff text-#000 flex-col">
    <div class="text-32px ml-4em mb-40px" style="font-weight: 700">Elsevier Open Access Resource Center</div>
    <div class="w-96% p-y-30px box-border rounded-6 relative" style="border: 1px solid #a4a0b2; margin: 0 auto">
      <span class="absolute top-[-13px] left-34px p-x-10px box-border bg-#fff font-600 text-#fd622e">How to publish OA journals under TA</span>
      <div class="flex items-center mt-30px justify-between box-border publish-list">
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle" class="cursor-pointer">
          <div class="publish-item cursor-pointer">
            <el-popover
                placement="bottom"
                width="200"
                trigger="hover">

              <div class="publish-popover">
                <div>Step 1 – Once the journal accepts your article, you will receive an email containing a link to the
                  “post acceptance author journey”.
                </div>
              </div>

              <template #reference>
                <div>
                  <img src="@/assets/publish1.png" alt="" class="publish-img">
                  <div class="text-28px font-bold mt-6px text-center">Accept</div>
                </div>
              </template>
            </el-popover>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" align="middle" class="m-l-10px m-r-10px">
          <img src="@/assets/ico-right.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle" class="cursor-pointer">
          <div class="publish-item cursor-pointer">
            <el-popover
                placement="bottom"
                width="200"
                trigger="hover"
                content='Step 2 – You will be asked to review your affiliation and funder details. Based on this information, you will see personalised publishing options including the option to publish under the agreement.'>
              <template #reference>
                <div>
                  <img src="@/assets/publish2.png" alt="" class="publish-img">
                  <div class="text-28px font-bold mt-6px text-center">Review</div>
                </div>
              </template>
            </el-popover>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" align="middle" class="m-l-10px m-r-10px">
          <img src="@/assets/ico-right.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle" class="cursor-pointer">
          <div class="publish-item cursor-pointer">
            <el-popover
                placement="bottom"
                width="200"
                trigger="hover"
                content='Step 3 – You will confirm your publishing choices and complete the post acceptance journey.'>
              <template #reference>
                <div>
                  <img src="@/assets/publish3.png" alt="" class="publish-img">
                  <div class="text-28px font-bold mt-6px text-center">Confirm</div>
                </div>
              </template>
            </el-popover>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" align="middle" class="m-l-10px m-r-10px">
          <img src="@/assets/ico-right.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle" class="cursor-pointer">
          <div class="publish-item cursor-pointer">
            <el-popover
                placement="bottom"
                width="200"
                trigger="hover"
                content='Step 4 – Your institution will validate your eligibility for the agreement'>
              <template #reference>
                <div>
                  <img src="@/assets/publish4.png" alt="" class="publish-img">
                  <div class="text-28px font-bold mt-6px text-center">Validate</div>
                </div>
              </template>
            </el-popover>
          </div>
        </el-col>
        <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" align="middle" class="m-l-10px m-r-10px">
          <img src="@/assets/ico-right.png" alt="">
        </el-col>
        <el-col :xs="24" :sm="24" :md="3" :lg="3" :xl="3" align="middle" class="cursor-pointer">
          <div class="publish-item cursor-pointer">
            <el-popover
                placement="bottom"
                width="200"
                trigger="hover"
                content='Step 5 – When publishing in subscription (hybrid) journals, you and your co-authors will receive an email to confirm that the APC will be covered by the agreement.'>
              <template #reference>
                <div>
                  <img src="@/assets/publish5.png" alt="" class="publish-img">
                  <div class="text-28px font-bold mt-6px text-center">Publish</div>
                </div>
              </template>
            </el-popover>
          </div>
        </el-col>
      </div>
      <div class="m-t-20px text-16px flex items-center ml-5em cursor-pointer" @click="handleJumpHow">
        <img src="@/assets/ico-play.png" class="w-45px h-45px mr-12px cursor-pointer" >
        <span class="font-bold m-r-6px">Watch</span>
        <i style="font-synthesis: weight style;">How do I complete my publishing journey to publish gold open
          access?</i>
      </div>
      <div class="m-t-10px text-16px flex items-center ml-5em cursor-pointer" @click="handleJumpReadPublish">
        <img src="@/assets/ico-read.png" class="w-36px h-36px ml-6px mr-12px cursor-pointer" @click="handleJumpHow">
        <span class="font-bold m-l-4px m-r-6px">Read</span>
        <i style="font-synthesis: weight style;">Publishing options: JULAC Institutions associated corresponding
          authors</i>
      </div>
    </div>
<!--    <el-row class="flex-col p-t-40px p-b-50px box-border  p-x-80px text-#000 publish">-->

<!--    </el-row>-->

    <el-row class="text-#000 mt-50px">
      <div class="w-96% p-y-30px box-border rounded-6 relative" style="border: 1px solid #a4a0b2; margin: 0 auto">
        <span class="absolute top-[-13px] left-34px p-x-10px box-border bg-#fff font-600 text-#fd622e">Webinars and training</span>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="box-border p-x-80px ">
          <el-carousel indicator-position="outside" :autoplay="false" :loop="false" arrow="always"  indicatorPosition="none" height="250">
            <el-carousel-item>
              <div class="flex carousel-list">
                <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="mr-68px cursor-pointer" @click="handleCarouselVisible">
                  <div class="relative w-100%">
<!--                    <div class="absolute bottom-14px left-20px text-#fff">-->
<!--                      <div class="text-20px" style="-webkit-text-stroke: 1px #000">User training video NO.1 >></div>-->
<!--                      <div class="text-18px" style="-webkit-text-stroke: 1px #000">Tue, Apr 16 2024</div>-->
<!--                    </div>-->
                    <img src="@/assets/swiper0.png" class="w-100% h-250px rounded-5" style="object-fit: contain">
                  </div>
                </el-col>

                <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="mr-68px">
                  <div class="relative w-100%">
<!--                    <div class="absolute bottom-14px left-20px text-#fff">-->
<!--                      <div class="text-20px" style="-webkit-text-stroke: 1px #000">User training video NO.2 >></div>-->
<!--                      <div class="text-18px" style="-webkit-text-stroke: 1px #000">Tue, Apr 16 2024</div>-->
<!--                    </div>-->
                    <img src="@/assets/swiper2_2.png" class="w-100% h-250px rounded-5" style="object-fit: contain">
                  </div>
                </el-col>

                <el-col :xs="24" :sm="24" :md="7" :lg="7" :xl="7" class="mr-68px">
                  <div class="relative w-100%">
<!--                    <div class="absolute bottom-14px left-20px text-#fff">-->
<!--                      <div class="text-20px" style="-webkit-text-stroke: 1px #000">User training video NO.3 >></div>-->
<!--                      <div class="text-18px" style="-webkit-text-stroke: 1px #000">Tue, Apr 16 2024</div>-->
<!--                    </div>-->
                    <img src="@/assets/swiper3_3.png" class="w-100% h-250px rounded-5" style="object-fit: contain">
                  </div>
                </el-col>
              </div>
            </el-carousel-item>
            <!--        <el-carousel-item>-->
            <!--          xxxxxxxxxxxx-->
            <!--        </el-carousel-item>-->

          </el-carousel>
        </el-col>
      </div>
<!--      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="box-border p-x-80px">-->
<!--        <div class="text-32px font-bold m-b-36px">Webinars and training</div>-->
<!--      </el-col>-->

    </el-row>
  </el-row>


<!--  <el-row id="FAQs" class="box-border p-x-80px p-b-30px mt-30px faq bg-#fff text-#000">-->
<!--    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="mr-20px">-->
<!--      <div class="mt-40px text-32px font-bold max-w-340px">Frequently Asked Questions</div>-->
<!--    </el-col>-->
<!--    <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17">-->
<!--      <div class="mt-40px text-32px font-bold">-->
<!--        <el-collapse v-model="activeName" accordion>-->
<!--          <el-collapse-item title="When does the agreement apply?" name="1" :icon="Plus">-->
<!--            <div class="text-18px font-normal">-->
<!--              Articles must have an original acceptance date between 1 January 2025 and 31 December 2027.-->
<!--            </div>-->
<!--          </el-collapse-item>-->
<!--          <el-collapse-item title="Who is the corresponding author?" name="2" :icon="Plus">-->
<!--            <div class="text-18px font-normal">-->
<!--              For the purpose of eligibility under the agreement, there can only be one corresponding author. The-->
<!--              corresponding author is the author who submits the manuscript and other documentation to the journal and-->
<!--              is the primary contact between the journal and the co-authors. Importantly, the corresponding author’s-->
<!--              affiliation will be used to determine eligibility for the publishing agreement. The affiliations of other-->
<!--              co-authors are not relevant for agreement eligibility.-->
<!--            </div>-->
<!--            <div class="text-18px font-bold">-->
<!--              The corresponding author’s responsibilities include:-->
<!--            </div>-->
<!--            <ul class="font-normal">-->
<!--              <li>Ensuring that all authors have complied with the journal’s policies, including reviewing and approving-->
<!--                the final version of the manuscript prior to submission.-->
<!--              </li>-->
<!--              <li>Distributing and responding to communications from the journal (e.g., decision letters, reviewers’-->
<!--                reports).-->
<!--              </li>-->
<!--              <li>Completing the post publication author journey including signing the Journal Publishing License-->
<!--                Agreement, Rights and Access information form, and selection of open access options on behalf of, and-->
<!--                with the agreement of, all co-authors of the paper.-->
<!--              </li>-->
<!--            </ul>-->
<!--            <div class="text-18px font-normal">Journals may follow requests of the team of authors and display other-->
<!--              corresponding authors in the published article. Which corresponding authors are displayed on the published-->
<!--              paper, however, is not relevant for agreement eligibility.-->
<!--            </div>-->
<!--          </el-collapse-item>-->
<!--          <el-collapse-item title="What license options apply?" name="3" :icon="Plus">-->
<!--            <div class="text-18px font-normal">-->
<!--              With this agreement, authors have a choice between a commercial (CC BY) or non-commercial (CC BY-NC-ND or-->
<!--              CC BY-NC) license. The licence choice is dependent on the journal selected. Please refer to the journal's-->
<!--              homepage for specific details.-->
<!--            </div>-->
<!--          </el-collapse-item>-->
<!--          <el-collapse-item title="Which article types does the agreement cover?" name="4" :icon="Plus">-->
<!--            <div class="text-18px font-normal">-->
<!--              The following article types are part of this agreement:-->
<!--            </div>-->
<!--            <ul class="font-normal">-->
<!--              <li>Case reports</li>-->
<!--              <li>Data in Briefs</li>-->
<!--              <li>Full-length articles</li>-->
<!--              <li>Micro-articles</li>-->
<!--              <li>Original software publication</li>-->
<!--              <li>Practice guidelines</li>-->
<!--              <li>Protocols</li>-->
<!--              <li>Review articles</li>-->
<!--              <li>Replication studies</li>-->
<!--              <li>Short communications</li>-->
<!--              <li>Short surveys</li>-->
<!--              <li>Video articles</li>-->
<!--            </ul>-->
<!--          </el-collapse-item>-->
<!--        </el-collapse>-->
<!--      </div>-->
<!--    </el-col>-->
<!--  </el-row>-->

  <!--  <el-row class="p-y-30px flex items-center bg-#fff text-16px box-border p-x-80px text-14px" style="border-top: 2px solid #eb6500">-->
  <!--    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">-->
  <!--      <img src="@/assets/logo.png" class="w-80px h-80px">-->
  <!--    </el-col>-->
  <!--    <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22" class="text-14px">-->
  <!--      <div class="text-16px font-bold">Contact information:</div>-->
  <!--      <div>Elsevier team: Lin,Lisa(ELS-BEI)l.lin.2@elsevier.com;</div>-->
  <!--      <div class="ml-120px">Liu,Xiaoqian(ELS-SHZ)Xiaoqian.Liu@elsevier.com</div>-->
  <!--      <div>Provide feedback to Highspot: Huo,Da(ElS-BEI)D.Huo@Elsevier.com</div>-->
  <!--      <div class="mt-10px">-->
  <!--        <div class="mb-6px">We use cookies to help provide and enhance our service and tailor content.Cookie settings</div>-->
  <!--        <div>Copyright @ 2024 Elsevier B.V., its licensors, and contributors. AII rights are reserved,including those for text and mock mining, AI training, and similar technologies.</div>-->
  <!--      </div>-->
  <!--    </el-col>-->
  <!--  </el-row>-->

  <el-dialog v-model="dialogBannerVisible" :modal="false" style="max-height: 500px; overflow-y: auto;">
    <div>
      <div class="text-22px" style="font-weight: 900">Agreement between The Joint University Librarians Advisory Committee (JULAC) and Elsevier</div>
    </div>
    <div class="p-x-30px box-border lh-[26px]">
      <div class="mt-40px text-13px">Elsevier and JULAC have established an agreement to support authors of the members who wish to publish open access.</div>
      <div>The cost of publishing open access is covered under the terms of this agreement. When publishing open access in hybrid journals, eligible corresponding authors do not have to pay an article publishing charge (APC).</div>

      <div class="text-16px mt-30px" style="font-weight: 600">How does the process work?</div>
      <div>The process of publishing under the agreement is straightforward:</div>
      <ul>
        <li>Step 1 – Once the journal accepts your article, you will receive an email containing a link to the “post acceptance author journey”.</li>
        <li>Step 2 – You will be asked to review your affiliation and funder details. Based on this information, you will see personalised publishing options including the option to publish under the agreement.</li>
        <li>Step 3 – You will confirm your publishing choices and complete the post acceptance journey.</li>
        <li>Step 4 – Your institution will validate your eligibility for the agreement.</li>
        <li>Step 5 – You and your co-authors will receive an email to confirm that the APC will be covered by the agreement. Please note that the number of APCs included under the agreement is fixed and will be allocated based on date of acceptance.</li>
      </ul>
      <div>
        Please be advised that it is strongly recommended to use your institute’s email address to ensure a seamless validation process.
      </div>
      <div>
        During the submission process, the system will present you with personalised publishing options including any agreement or offer that you may be eligible for. You can indicate your publishing choice during submission, but you are not required to finalize your choice until after acceptance.
      </div>

      <div class="text-16px mt-30px" style="font-weight: 600">Which institutions are covered by this agreement?</div>
      <div>This agreement supports corresponding authors (see FAQ at the bottom of this page) affiliated with JULAC institution:</div>
      <ul>
        <li>The Chinese University of Hong Kong</li>
        <li>City University of Hong Kong</li>
        <li>The Education University of Hong Kong</li>
        <li>Hong Kong Baptist University</li>
        <li>The Hong Kong Polytechnic University</li>
        <li>Lingnan University</li>
        <li>The University of Hong Kong</li>
      </ul>

      <div class="text-16px mt-30px" style="font-weight: 600">Which journals are included in this agreement?</div>
      <div>Authors can publish eligible articles (see FAQ at the bottom of this page) in a wide variety of participating Elsevier journals across a range of disciplines.</div>

      <div class="text-16px mt-30px" style="font-weight: 600">What are the author benefits of publishing open access with Elsevier?</div>
      <div>When you publish open access with Elsevier, you get the attention you deserve. We offer authors:</div>
      <ul>
        <li>Choice – We have hybrid and fully OA journals across every scientific discipline.</li>
        <li>Support – Receive expert support throughout submission, during peer review, and post-acceptance.</li>
        <li>Visibility – Your final published article will be published on ScienceDirect, the number one research platform in the world.</li>
      </ul>
      <div>To learn more about the benefits of publishing open access with Elsevier visit our Open Access Author Hub.</div>
      <div>Are there other publishing options?</div>
      <div>Authors can continue to choose to publish under the subscription model which includes the option to self-archive their manuscript in line with Elsevier’s sharing policy.</div>

      <div class="mt-50px">
        <div style="font-weight: 300;">To read more the agreement, you can access to this website:</div>
        <div style="font-weight: 300;">
          <a href="https://www.elsevier.com/open-access/agreements/julac" target="_blank">
            https://www.elsevier.com/open-access/agreements/julac
          </a>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="dialogBannerVisible = false" style="width: 96px; background: #007a5a">
          OK
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="dialogAccessPlatformVisible" class="home" :modal="false" style="max-height: 500px; overflow-y: auto;">
    <div>
      <div class="text-22px" style="font-weight: 900">Elsevier Open Access Platform</div>
    </div>
    <div class="lh-[26px]">
      <div class="text-14px p-t-30px p-x-20px box-border">Elsevier Open Access Platform provides institutional, funding, and society partners with tools and data to manage and track their open access publishing with Elsevier.</div>
      <el-row id="home" class="p-t-30px p-b-100px p-x-30px box-border justify-center bg-#fff text-#000">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="box-border">
          <div class="flex justify-center home-list">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" align="middle">
              <div class="max-w-230px home-item">
                <img src="@/assets/ico-mail.png">
                <div class="mt-20px home-bottom text-left">
                  <div class="text-16px text-#737373 m-b-6px home-title">Notifications</div>
                  <div class="lh-[1.8] home-decription">
                    Keep up-to-date with incoming requests through timely emails sent directly to your mailbox
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" align="middle">
              <div class="max-w-230px home-item">
                <img src="@/assets/ico-lock.png">
                <div class="mt-20px home-bottom text-left">
                  <div class="text-16px text-#737373 m-b-6px home-title">Self-service</div>
                  <div class="lh-[1.8] home-decription">
                    Quickly review and manage requests from authors who wish to benefit from your agreement with Elsevier
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" align="middle">
              <div class="max-w-230px home-item">
                <img src="@/assets/ico-data.png">
                <div class="mt-20px home-bottom text-left">
                  <div class="text-16px text-#737373 m-b-6px home-title">Analytics</div>
                  <div class="lh-[1.8] home-decription">
                    Monitor the performance of your publishing across agreements with downloadable data reports
                  </div>
                </div>
              </div>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <div class="flex justify-end items-center home-list-footer">
          <div class="flex items-center cursor-pointer" @click="handleJumpWatch">
            <img src="@/assets/ico-play.png" class="w-45px h-45px mr-12px cursor-pointer">
            <span class="font-bold mr-8px">Watch</span>
            Tutorials
          </div>
          <div class="flex items-center cursor-pointer" @click="handleJumpReadGuidance">
            <img src="@/assets/ico-read.png" class="w-36px h-36px ml-6px mr-12px cursor-pointer">
            <span class="font-bold ml-4px mr-8px">Read</span>
            Guidance
          </div>
          <el-button type="primary" @click="handleJumpEOAP" style="width: 96px; background: #007a5a;margin-left: 20px;">
            EOAP
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="dialogCarouselVisible" class="home" :modal="false" style="max-height: 500px; overflow-y: auto;">
    <div>
      <div class="text-22px" style="font-weight: 900">Navigating the PubIication Process</div>
    </div>
    <div class="lh-[26px]">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="m-y-20px flex justify-center">
          <img src="@/assets/swiper0.png" class="w-90% h-420px rounded-5 cursor-pointer" style="object-fit: contain;" @click="handleJumpLibrary('https://www.bilibili.com/video/BV1Nb9cYHEB9/?spm_id_from=333.999.0.0&vd_source=e9e7d2e3ac833df30d1e9ad63a451f50')">
<!--          <img src="@/assets/ico-play.png" class="w-60px h-60px absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">-->
        </div>
        <div class="flex items-center cursor-pointer mb-10px" @click="handleJumpLibrary('https://online.fliphtml5.com/sinezd/nbhh/')">
          <img src="@/assets/ico-read.png" class="w-45px h-45px mr-12px cursor-pointer">
          JULAC Author Journey PDF
        </div>
        <div class="flex items-center cursor-pointer mb-10px" @click="handleJumpLibrary('https://online.fliphtml5.com/sinezd/loxa/')">
          <img src="@/assets/ico-read.png" class="w-45px h-45px mr-12px cursor-pointer">
          Selecting Open Access Journals
        </div>
        <div class="flex items-center cursor-pointer mb-10px" @click="handleJumpLibrary('https://online.fliphtml5.com/sinezd/ekpn/')">
          <img src="@/assets/ico-read.png" class="w-45px h-45px mr-12px cursor-pointer">
          SJ_Author Workshop-EM Instruction
        </div>
      </el-col>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <div class="flex justify-end items-center">
          <el-button type="primary" @click="dialogCarouselVisible = false" style="width: 96px; background: #007a5a;margin-left: 20px;">
            OK
          </el-button>
        </div>
      </div>
    </template>
  </el-dialog>

</template>
<script setup lang="ts">
import {ref, watch} from 'vue'
import {Plus, Minus} from '@element-plus/icons-vue'
import {Search} from '@element-plus/icons-vue'
import navData from '@/mock/navData.json'
import universityData from '@/mock/universityData.json'
import journalDefault from '@/mock/journalDefault.json'
import journalEdUHK from '@/mock/journalEdUHK.json'
import journalLingnan from '@/mock/journalLingnan.json'
import { useWindowSize } from '@vueuse/core'

const navList = ref(navData)
const universityList = ref(universityData)

const isMenuOpen = ref(false)
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 992)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const activeName = ref('')

const activeUniversity = ref('CUHK')
const activeHoverUniversity = ref('CUHK')

const currentUniversityPages = ref(journalDefault)

const letterList = ([
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
])

const searchVal = ref('')
const selectedLetter = ref(null)

const dialogBannerVisible = ref(false)
const dialogAccessPlatformVisible = ref(false)
const dialogCarouselVisible = ref(false)

const handleSearchChange = (event) => {
  searchVal.value = event.target.value.trim().replace(/\s+/g, ' ')
  pageParams.current = 1
}

const pageParams = reactive<any>({
  current: 1,
  pageNo: 1,
  pageSize: 5,
  total: 10
})

const filteredData = computed(() => {
  if (!searchVal.value && !selectedLetter.value) {
    return {
      total: currentUniversityPages.value.total,
      datas: currentUniversityPages.value.datas
    }
  }

  let filteredDatas = currentUniversityPages.value.datas;

  if (selectedLetter.value) {
    filteredDatas = filteredDatas.filter(item =>
        item.title[0].toUpperCase() === selectedLetter.value
    )
  }

  if (searchVal.value) {
    filteredDatas = filteredDatas.filter(item =>
        item.title.toLowerCase().includes(searchVal.value.toLowerCase())
    )
  }

  return {
    total: filteredDatas.length,
    datas: filteredDatas
  }
})

const paginatedData = computed(() => {
  const start = (pageParams.current - 1) * pageParams.pageSize
  const end = start + pageParams.pageSize
  return {
    total: Number(filteredData.value.total),
    datas: filteredData.value.datas.slice(start, end)
  }
})

const handleFilterLetter = (letter) => {
  selectedLetter.value = letter === 'Others' ? null : letter
  pageParams.current = 1
}


const cooperateInfo = reactive({
  title: 'The Chinese University of Hong Kong',
  description: 'The Chinese University of Hong Kong Library is a leading research library in Asia. We have a significant bilingual collection of electronic and print resources. Our Special Collections ranging from Shang dynasty oracle bones to modern Chinese literary archives. We also have inspirational and award-winning study spaces and a team of library staff committed to helping you make the best use of the Library.',
  nameEngAbbr: 'CUHK',
  libraryUrl: 'https://www.cuhk.edu.hk/english/'
})

// 跳转指定页面
const handleJumpUrl = (url) => {
  if (url === 'https://oap.elsevier.com/s/') {
    dialogAccessPlatformVisible.value = true
  } else {
    window.open(url, '_blank')
  }
  isMenuOpen.value = false;
}

const handleJumpFind = () => {
  window.open('https://agreements.journals.elsevier.com/the-joint-university-librarians-advisory-committee', '_blank')
}

const handleJumpJULAC = () => {
  dialogBannerVisible.value = true
  // window.open('https://www.elsevier.com/open-access/agreements/julac', '_blank')
}

const handleCooperate = (val) => {
  if (val === 'HKU') {
    Object.assign(cooperateInfo, {
      title: 'The University of Hong Kong',
      description: 'The University of Hong Kong Libraries is an essential part of the educational facilities provided to you by the University. The Libraries lends itself to the three pillars of the University\'s vision for Teaching and Learning, Research, and Knowledge Exchange through its outstanding resources, people-centred services as well as its innovative and collaborative approaches.',
      nameEngAbbr: 'HKU',
      libraryUrl: 'https://lib.hku.hk/',
      activeUniversity: 'HKU'
    })
    activeUniversity.value = 'HKU'
    currentUniversityPages.value = journalDefault
  } else if (val === 'CUHK') {
    Object.assign(cooperateInfo, {
      title: 'The Chinese University of Hong Kong',
      description: 'The Chinese University of Hong Kong Library is a leading research library in Asia. We have a significant bilingual collection of electronic and print resources. Our Special Collections ranging from Shang dynasty oracle bones to modern Chinese literary archives. We also have inspirational and award-winning study spaces and a team of library staff committed to helping you make the best use of the Library.',
      nameEngAbbr: 'CUHK',
      libraryUrl: 'https://www.lib.cuhk.edu.hk/sc/',
      activeUniversity: 'CUHK'
    })
    activeUniversity.value = 'CUHK'
    currentUniversityPages.value = journalDefault
  } else if (val === 'CityU') {
    Object.assign(cooperateInfo, {
      title: 'The City University of Hong Kong',
      description: 'In line with the University’s mission to nurture and develop the talents of students and to create applicable knowledge, the Library endeavours to support and augment learning, teaching and research by providing an environment conducive to studying and offering seamless access to the diverse, up-to-date and high-quality resources. It delivers effective and value-added services and actively encourages and facilitates use of the space, collections and services critical to the success of students and faculty.',
      nameEngAbbr: 'CityU',
      libraryUrl: 'https://www.cityu.edu.hk/lib/',
      activeUniversity: 'CityU'
    })
    activeUniversity.value = 'CityU'
    currentUniversityPages.value = journalDefault
  } else if (val === 'PolyU') {
    Object.assign(cooperateInfo, {
      title: 'The Hong Kong Polytechnic University',
      description: 'As the learning hub of the University and a dynamic scholarly gateway, the Library strives to facilitate and inspire students and faculty to acquire, create and share knowledge and to excel through education and scholarship.',
      nameEngAbbr: 'PolyU',
      libraryUrl: 'https://www.lib.polyu.edu.hk/',
      activeUniversity: 'PolyU'
    })
    activeUniversity.value = 'PolyU'
    currentUniversityPages.value = journalDefault
  } else if (val === 'HKBU') {
    Object.assign(cooperateInfo, {
      title: 'Hong Kong Baptist University',
      description: 'HKBU Library advances research excellence through expert support and innovative services that maximize scholarly impact. Through its commitment to open scholarship, the Library empowers HKBU researchers to reach global audiences and accelerate the pace of discovery. Its experienced team develops focused collections and provides specialized guidance to enhance research visibility and engagement. The Library actively champions open access initiatives while fostering an environment where knowledge flows freely across disciplinary boundaries.',
      nameEngAbbr: 'HKBU',
      libraryUrl: 'https://library.hkbu.edu.hk/',
      activeUniversity: 'HKBU'
    })
    activeUniversity.value = 'HKBU'
    currentUniversityPages.value = journalDefault
  } else if (val === 'EdUHK') {
    Object.assign(cooperateInfo, {
      title: 'The Education University of Hong Kong',
      description: 'The Library will become the key venue and platform for learning, teaching, research and knowledge exchange of a leading university in the Asia Pacific region and beyond with a focus on educational research, development and innovation. The Library will achieve excellence in information resources, services and infrastructure. Through its innovation and utilization of all available resources, the Library will contribute to research, scholarship and professional development in Education and complementary disciplines.',
      nameEngAbbr: 'EdUHK',
      libraryUrl: 'https://www.lib.eduhk.hk/',
      activeUniversity: 'EdUHK'
    })
    activeUniversity.value = 'EdUHK'
    currentUniversityPages.value = journalEdUHK
  } else if (val === 'Lingnan') {
    Object.assign(cooperateInfo, {
      title: 'Lingnan University',
      description: 'Lingnan University is known for its long tradition in providing high-quality liberal arts education. The Library strives to become the learning hub and intellectual heart of the University to support our student\'s and staff’s learning and research journey in the University. We are committed to providing our students, faculty, alumni and all our stakeholders with rich resources, innovative services, diverse facilities and inspiring space to advance the strategic priorities of the University and your pursuits in the University.',
      nameEngAbbr: 'Lingnan',
      libraryUrl: 'https://library.ln.edu.hk/',
      activeUniversity: 'Lingnan'
    })
    activeUniversity.value = 'Lingnan'
    currentUniversityPages.value = journalLingnan
  }
  pageParams.current = 1
}

const handleHover = (val) => {
  if (val === 'HKU') {
    activeHoverUniversity.value = 'HKU'
  } else if (val === 'CUHK') {
    activeHoverUniversity.value = 'CUHK'
  } else if (val === 'CityU') {
    activeHoverUniversity.value = 'CityU'
  } else if (val === 'HKBU') {
    activeHoverUniversity.value = 'HKBU'
  } else if (val === 'PolyU') {
    activeHoverUniversity.value = 'PolyU'
  } else if (val === 'EdUHK') {
    activeHoverUniversity.value = 'EdUHK'
  } else if (val === 'Lingnan') {
    activeHoverUniversity.value = 'Lingnan'
  }
}

const handleJumpWatch = () => {
  window.open('https://www.bilibili.com/video/BV14AFNejEJn', '_blank')
}

const handleJumpReadGuidance = () => {
  window.open('https://online.fliphtml5.com/sinezd/etzb/#p=1', '_blank')
}

const handleJumpLibrary = (val) => {
  window.open(val, '_blank')
}

const handleJumpEOAP = () => {
  window.open('https://oap.elsevier.com/s/', '_blank')
}

const handleJumpHow = () => {
  window.open('https://view.highspot.com/viewer/65c1e820368f196ee2f1ade0', '_blank')
}

const handleJumpReadPublish = () => {
  window.open('https://online.fliphtml5.com/sinezd/mzxa/', '_blank')
}

const handleJumpAnchor = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({behavior: 'smooth'})
  }
}

const handleChangePage = (newPage) => {
  pageParams.current = newPage;
}

// watch(
//     () => currentUniversityPages.value,
//     async (val: string) => {
//       pageParams.total = Number(currentUniversityPages.value.total)
//     },
//     { immediate: true }
// )

const handleCarouselVisible = () => {
  dialogCarouselVisible.value = true
}

</script>
<style lang="scss" scoped>
html {
  scroll-behavior: smooth;
}

.header {
  background: #fff;
  box-shadow: 0px 4px 4px 0px #00000040;
  font-size: 16px;
}

.nav {
  div.active {
    color: #fff;
    background: #7694DC;
    border-radius: 10px;
    padding: 8px 10px;
    box-sizing: border-box;
  }
}

.banner {
  background: #fd622e url("@/assets/banner_bg.png") no-repeat right;
}

.cooperate {
  flex-wrap: nowrap;
  .el-col {
    margin: 0 6px;
  }
}

//.publish {
//  .publish-item:hover {
//    background: #fff;
//    border-radius: 10px;
//  }
//}

//.publish-item-popover {
//  width: 600px;
//  font-size: 24px;
//  background: #fff;
//}

:deep(.el-collapse) {
  border-top: none;
}

:deep(.el-collapse-item__header) {
  height: 70px;
  font-size: 20px;
  color: #2456CE;
}

:deep(.el-collapse-item__content) {
  margin-top: 30px;
  font-size: 18px;
}

.faq {
  li::marker {
    color: #ff4203;
  }
}

:deep(.el-pagination--small .btn-prev) {
  background: #f2f2f2;
}

:deep(.el-pagination--small .el-pager li) {
  background: #f2f2f2;
}

:deep(.el-pagination--small .btn-next) {
  background: #f2f2f2;
}

:deep(.el-input) {
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

:deep(.el-input__wrapper) {
  border-radius: 12px;
}

.university-literature span:hover {
  color: #d29f8e;
}

@media (min-width: 1920px) {
  .header {
    .logo {
      margin-right: 0;

      .logo1 {
        width: 200px;
      }

      .logo2 {
        width: 400px;
      }
    }
  }
  .banner {
    padding-top: 54px;
    padding-left: 120px;

    .title {
      font-size: 48px;
    }

    .description {
      font-size: 24px;
      max-width: 700px;
    }
  }
  .cooperate {
    flex-wrap: nowrap;
    .normal-img {
      width: 260px;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      box-sizing: border-box;
    }

    img.active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    img.hover-active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .el-pagination {
    margin-left: 25em;
  }
  .elsevier-tab {
    a {
      text-decoration: none;
      color: #000;
      margin: 0 30px;
      font-weight: 300;
      font-size: 24px;
    }

    .elsevier-tab-item.active {
      padding-bottom: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #FD622E;
    }
  }
  .publish {
    .publish-item {
      .publish-img {
        width: 180px;
      }
    }
  }

  :deep(.publish-popover) {
    width: 600px;
    font-size: 24px;
    border-radius: 10px;
  }
  .home {
    .home-item {
      img  {
        width: 180px;
        max-width: 180px;
      }
    }
  }
}

@media (min-width: 1200px) and (max-width: 1920px) {
  .header {
    .logo {
      margin-right: 0;

      .logo1 {
        width: 200px;
      }

      .logo2 {
        width: 300px;
      }
    }
  }
  .banner {
    padding-top: 54px;
    padding-left: 80px;

    .title {
      font-size: 40px;
    }

    .description {
      font-size: 20px;
      max-width: 500px;
    }
  }
  .cooperate {
    flex-wrap: nowrap;
    .normal-img {
      width: 150px;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      box-sizing: border-box;
    }

    img.active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .el-pagination {
    margin-left: 25em;
  }
  .elsevier-tab {
    a {
      text-decoration: none;
      color: #000;
      margin: 0 20px;
      font-weight: 300;
      font-size: 22px;
    }

    .elsevier-tab-item.active {
      padding-bottom: 10px;
      border-bottom: 1px solid #FD622E;
    }
  }
  .publish {
    .publish-item {
      .publish-img {
        width: 170px;
        height: 155px;
      }
    }
  }
  .home {
    .home-item {
      img  {
        width: 160px;
        max-width: 160px;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .header {
    .logo {
      margin-right: 0;

      .logo1 {
        width: 140px;
      }

      .logo2 {
        width: 260px;
      }
    }
  }
  .banner {
    padding-top: 54px;
    padding-left: 40px;

    .title {
      font-size: 32px;
    }

    .description {
      max-width: 500px;
      font-size: 16px;
    }
  }
  .cooperate {
    flex-wrap: nowrap;
    .normal-img {
      width: 140px;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      box-sizing: border-box;
    }

    img.active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .el-pagination {
    margin-left: 16em;
  }
  .elsevier-tab {
    a {
      text-decoration: none;
      color: #000;
      margin: 0 14px;
      font-weight: 300;
      font-size: 20px;
    }

    .elsevier-tab-item.active {
      padding-bottom: 10px;
      border-bottom: 1px solid #FD622E;
    }
  }
  .publish {
    .publish-item {
      .publish-img {
        width: 160px;
        height: 145px;
      }
    }
  }
  .home {
    .home-item {
      img  {
        width: 140px;
        max-width: 140px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .header {
    .logo {
      margin-right: 0;
      .logo1 {
        width: 150px;
      }

      .logo2 {
        width: 220px;
      }
    }
  }
  .banner {
    padding-top: 54px;
    padding-left: 80px;

    .title {
      font-size: 30px;
    }

    .description {
      max-width: 300px;
      font-size: 14px;
    }
  }
  .cooperate {
    height: 100%;
    flex-wrap: wrap;
    .normal-img {
      width: 70%;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      box-sizing: border-box;
      margin: 20px 0;
    }

    img.active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .searchList {
    padding: 20px 120px;
    box-sizing: border-box;
  }
  :deep(.el-pagination) {
    margin-left: 20em;
  }
  .publish-list {
    flex-direction: column;
  }
  .publish {
    .publish-item {
      .publish-img {
        width: 160px;
        height: 145px;
      }
    }
  }
  .carousel-list {
    flex-direction: column;
  }
  :deep(.el-carousel__container) {
    padding: 240px 0;
  }
  .home-list {
    flex-wrap: wrap;
  }
  .home-list-footer {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .header {
    .logo {
      margin-right: 0;
      .logo1 {
        width: 150px;
      }

      .logo2 {
        width: 220px;
      }
    }
  }
  .banner {
    padding-top: 54px;
    padding-left: 80px;

    .title {
      font-size: 30px;
    }

    .description {
      max-width: 300px;
      font-size: 14px;
    }
  }
  .cooperate {
    height: 100%;
    flex-wrap: wrap;
    .normal-img {
      width: 70%;
      border-bottom: 2px solid #fff;
      padding-bottom: 10px;
      box-sizing: border-box;
      margin: 20px 0;
    }

    img.active {
      border-bottom: 2px solid #FD622E;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
  }
  .searchList {
    padding: 20px 120px;
    box-sizing: border-box;
  }
  :deep(.el-pagination) {
    margin-left: 20em;
  }
  .publish-list {
    flex-direction: column;
  }
  .publish {
    .publish-item {
      .publish-img {
        width: 160px;
        height: 145px;
      }
    }
  }
  .carousel-list {
    flex-direction: column;
  }
  :deep(.el-carousel__container) {
    padding: 240px 0;
  }
  .home-list {
    flex-wrap: wrap;
  }
  .home-list-footer {
    display: flex;
    flex-direction: column;
  }
}
</style>
