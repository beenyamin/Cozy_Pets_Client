<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </tbody>
  </table>
</div>

{ AllCampaign.map((pets, index) => <tr key={pets._id}></tr>
<th>
{index + 1}
</th>
<tr>

  <th>1</th>
  <td>Cy Ganderton</td>
  <td>Quality Control Specialist</td>
  <td>Pause</td>
  <td>Edit</td>
  <td>View Donators</td>
</tr>

}