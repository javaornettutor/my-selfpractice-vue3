<template>
    <div>create</div>


    <form @submit.prevent="CreateRecord">
      <table class="table table-striped table-bordered">
        <tbody>
          <tr>
            <td>Mood ID</td>
            <td>{{ data.moodId }}</td>
          </tr>
          <tr>
            <td>Mood Description</td>
            <td><textarea v-model="data.description"></textarea></td>
            <!-- <td><input type="text" v-model="data.description" /></td> -->
          </tr>
          <tr>
            <td>Mood createdAt</td>
            <td>
              <span>{{ data.createdAt }} </span>
            </td>
          </tr>
          <tr>
            <td><button type="submit">Save</button></td>
            <td><button @click="GoBackListing">Go Back</button></td>
          </tr>
        </tbody>
      </table>
    </form>

</template>